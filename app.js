/* Sayonara Sale — renders the item list. No build step, no dependencies. */
(function () {
  "use strict";

  var CONFIG = window.SALE_CONFIG || {};
  var ITEMS = window.SALE_ITEMS || [];
  var CATS = CONFIG.categories || [];

  /* UI strings. Item names/notes are translated in the data itself. */
  var T = {
    all:        { en: "Everything",   ja: "すべて" },
    free:       { en: "Free",         ja: "無料" },
    freePrice:  { en: "FREE",         ja: "無料" },
    ask:        { en: "Ask me",       ja: "応相談" },
    sold:       { en: "Sold",         ja: "売却済み" },
    reserved:   { en: "Reserved",     ja: "お取り置き" },
    contactH:   { en: "Want something?", ja: "ご希望の方へ" },
    lineSoon:   { en: "LINE link coming soon.", ja: "LINEリンクは準備中です。" },
    lineCta:    { en: "Message us on LINE", ja: "LINEで連絡する" },
    emptyCat:   { en: "Nothing in this category yet.", ja: "このカテゴリーにはまだ何もありません。" },
    emptyAll:   { en: "Nothing listed yet — photos are coming soon.", ja: "まだ掲載がありません。写真を準備中です。" },
    availNow:   { en: "Available now", ja: "すぐ引き取り可" },
    justAdded:  { en: "New", ja: "新着" },
    priceDrop:  { en: "Price drop", ja: "値下げ" },
    availAsk:   { en: "Available — ask for exact date", ja: "引き取り日は応相談" }
  };

  /* "2026-08-28" -> "08/28". The same in both languages, so a date reads
     identically however you arrived at the page. Sliced out of the string
     rather than parsed with new Date(), which reads a bare ISO date as UTC and
     would slip a day in JST. */
  function fmtDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    return m ? m[2] + "/" + m[3] : "";
  }

  /* Everything is collectable now unless `available` says otherwise. Three
     states, all badged: green for now, terracotta for a date, terracotta for
     "ask" — which is for things we know aren't collectable yet but can't put a
     day on, because the flights depend on visas that haven't come through.
     Checked before fmtDate(), which would read "ask" as no date and so as now. */
  function availability(item) {
    if (item.available === "ask") return { cls: "later", text: t(T.availAsk) };
    var d = fmtDate(item.available);
    if (!d) return { cls: "now", text: t(T.availNow) };
    /* A closing date turns it into a collection window — some things come off
       the wall on one day and have to be gone by the next. */
    var to = fmtDate(item.availableTo);
    if (to) {
      return {
        cls: "later",
        text: lang === "ja" ? d + "〜" + to + " 引き取り可" : "Available " + d + "–" + to
      };
    }
    return {
      cls: "later",
      text: lang === "ja" ? d + " から引き取り可" : "Available " + d
    };
  }

  var lang = "en";
  try {
    var saved = localStorage.getItem("sale-lang");
    if (saved === "en" || saved === "ja") lang = saved;
  } catch (e) { /* private browsing */ }

  var filter = "all";

  function other() { return lang === "en" ? "ja" : "en"; }

  /* Pick a language from a {en, ja} pair, falling back to whatever exists. */
  function t(pair, which) {
    if (!pair) return "";
    if (typeof pair === "string") return pair;
    var want = which || lang;
    return pair[want] || pair[want === "en" ? "ja" : "en"] || "";
  }

  function catOf(id) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i];
    return { id: id, emoji: "📦", label: { en: "Other", ja: "その他" } };
  }

  function money(n) {
    return (CONFIG.currency || "¥") + Number(n).toLocaleString("en-US");
  }

  function priceText(price) {
    if (price === 0) return { text: t(T.freePrice), cls: "is-free" };
    if (price === null || price === undefined || price === "") return { text: t(T.ask), cls: "is-ask" };
    return { text: money(price), cls: "" };
  }

  /* A `wasPrice` is the old price of something that has been marked down: it
     renders struck through beside the new one. Ignored unless it's a real
     number above the current price, so a stale or equal value can't produce a
     "reduced from ¥500 to ¥500" card. */
  function wasPrice(item) {
    var w = item.wasPrice;
    if (typeof w !== "number" || !isFinite(w) || w <= 0) return null;
    var now = item.price;
    if (typeof now !== "number" || !isFinite(now) || w <= now) return null;
    return money(w);
  }

  /* Optional "more info" link. Accepts a plain URL string or an {en, ja} pair
     when the manufacturer has separate Japanese and English pages. Anything
     that isn't a real http(s) URL is ignored rather than rendered. */
  function linkFor(item) {
    var url = t(item.link);
    if (!url) return null;
    try {
      var u = new URL(url);
      if (u.protocol !== "http:" && u.protocol !== "https:") return null;
      return { url: url, host: u.hostname.replace(/^www\./, "") };
    } catch (e) {
      return null;
    }
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null && text !== "") n.textContent = text;
    return n;
  }

  /* ---------- ordering ---------- */

  /* "Ask me" items sort to the top: a price on request means a big-ticket
     thing, not a cheap one. */
  function priceRank(item) {
    var p = item.price;
    if (p === null || p === undefined || p === "") return Infinity;
    return Number(p);
  }

  /* `pinned` is a rank, not a flag: 1 shows first, 2 next, and so on. It only
     orders items within a status group — a pinned item that sells still sinks
     to the bottom with the rest of the sold ones. */
  function pinRank(item) {
    var p = item.pinned;
    if (p === true) return 1;
    if (typeof p === "number" && isFinite(p) && p > 0) return p;
    return Infinity;
  }

  /* Still going, then reserved, then sold — so the top of the page is only
     things a visitor can actually have. */
  function statusRank(item) {
    if (item.status === "sold") return 2;
    if (item.status === "reserved") return 1;
    return 0;
  }

  /* Items added in the last few days lead the page, so someone who has already
     seen it can spot what's changed. A short window on purpose: once things
     settle back into price order the expensive items return to the top, where
     they need to be. */
  var NEW_DAYS = 3;

  function daysSince(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    if (!m) return Infinity;
    var then = Date.UTC(+m[1], +m[2] - 1, +m[3]);
    var n = new Date();
    var today = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
    return Math.round((today - then) / 86400000);
  }

  function isNew(item) {
    var d = daysSince(item.added);
    return d >= 0 && d <= NEW_DAYS;
  }

  /* Within each of those groups: dearest first. The expensive things need the
     most weeks to find a buyer; a ¥500 blender sells itself. Sort is stable, so
     items at the same price stay in the order they were added. */
  function ordered(list) {
    return list.slice().sort(function (a, b) {
      var byStatus = statusRank(a) - statusRank(b);
      if (byStatus) return byStatus;

      /* Pinned items lead their group, in rank order, ahead of both New and
         price. Everything unpinned ranks Infinity and falls through below. */
      var ap = pinRank(a), bp = pinRank(b);
      if (ap !== bp) return ap < bp ? -1 : 1;

      var an = isNew(a), bn = isNew(b);
      if (an !== bn) return an ? -1 : 1;          // just-added items lead
      if (an) {
        var byAge = daysSince(a.added) - daysSince(b.added);
        if (byAge) return byAge;                  // newest of those first
      }
      return priceRank(b) - priceRank(a);
    });
  }

  function matches(item) {
    if (filter === "all") return true;
    if (filter === "free") return item.price === 0;
    return item.category === filter;
  }

  /* ---------- chrome ---------- */

  function renderChrome() {
    document.documentElement.lang = lang;
    document.title = t(CONFIG.title) || "Sayonara Sale";

    document.getElementById("site-title").textContent = t(CONFIG.title);
    document.getElementById("site-subtitle").textContent = t(CONFIG.subtitle);

    /* the photo of us, if there is one */
    var about = CONFIG.aboutPhoto || {};
    var figure = document.getElementById("about-figure");
    if (about.src) {
      var photo = document.getElementById("about-photo");
      photo.src = about.src;
      photo.alt = t(about.alt) || t(about.caption) || "";
      photo.loading = "eager";
      document.getElementById("about-caption").textContent = t(about.caption);
      figure.hidden = false;
    } else {
      figure.hidden = true;
    }

    var intro = document.getElementById("site-intro");
    intro.textContent = "";
    (CONFIG.intro || []).forEach(function (para) {
      var text = t(para);
      if (text) intro.appendChild(el("p", null, text));
    });

    Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    /* pickup banner */
    var p = CONFIG.pickup || {};
    var banner = document.getElementById("pickup-banner");
    banner.textContent = "";

    /* Where. Buyers need this before anything else, so it goes first and
       shows whether or not a pickup date has been settled. */
    if (t(p.area)) banner.appendChild(el("div", "where", "📍 " + t(p.area)));

    var when = p.announced
      ? [t(p.date), t(p.place)].filter(Boolean).join(" · ")
      : t(p.tba);
    banner.appendChild(el("div", null, "📅 " + when));

    /* LINE buttons */
    var url = (CONFIG.contact && CONFIG.contact.lineUrl) || "";
    var headBtn = document.getElementById("line-btn");
    if (url) {
      headBtn.href = url;
      headBtn.target = "_blank";
      headBtn.rel = "noopener";
    } else {
      headBtn.href = "#contact";
      headBtn.removeAttribute("target");
    }

    document.getElementById("contact-heading").textContent = t(T.contactH);
    document.getElementById("contact-note").textContent = t(CONFIG.contact && CONFIG.contact.note);

    var cta = document.getElementById("contact-line");
    if (url) {
      cta.href = url;
      cta.target = "_blank";
      cta.rel = "noopener";
      cta.className = "line-btn big";
      cta.textContent = t(T.lineCta);
    } else {
      cta.removeAttribute("href");
      cta.removeAttribute("target");
      cta.className = "muted";
      cta.textContent = t(T.lineSoon);
    }

    /* QR code, for anyone reading on a laptop who can't tap the button */
    var qrFig = document.getElementById("qr-figure");
    var qrSrc = (CONFIG.contact && CONFIG.contact.qr) || "";
    if (qrSrc) {
      document.getElementById("contact-qr").src = qrSrc;
      document.getElementById("qr-caption").textContent = t(CONFIG.contact.qrNote);
      qrFig.hidden = false;
    } else {
      qrFig.hidden = true;
    }

    document.getElementById("contact-address").textContent = t(p.addressNote);
  }

  /* ---------- filters ---------- */

  function renderFilters() {
    var nav = document.getElementById("filters");
    nav.textContent = "";

    /* Nothing listed yet — a lone "Everything 0" chip just looks broken. */
    nav.hidden = ITEMS.length === 0;
    if (nav.hidden) return;

    var defs = [{ id: "all", emoji: "", label: T.all }];
    CATS.forEach(function (c) {
      if (ITEMS.some(function (i) { return i.category === c.id; })) defs.push(c);
    });
    if (ITEMS.some(function (i) { return i.price === 0; })) {
      defs.push({ id: "free", emoji: "🎁", label: T.free });
    }
    defs.forEach(function (d) {
      var n = ITEMS.filter(function (i) {
        if (d.id === "all") return true;
        if (d.id === "free") return i.price === 0;
        return i.category === d.id;
      }).length;

      var b = el("button", "chip");
      b.type = "button";
      b.setAttribute("aria-pressed", String(filter === d.id));
      b.appendChild(document.createTextNode((d.emoji ? d.emoji + " " : "") + t(d.label) + " "));
      b.appendChild(el("span", "count", String(n)));
      b.addEventListener("click", function () {
        filter = d.id;
        renderFilters();
        renderGrid();
      });
      nav.appendChild(b);
    });
  }

  /* ---------- grid ---------- */

  function renderGrid() {
    var grid = document.getElementById("grid");
    var empty = document.getElementById("empty");
    grid.textContent = "";

    var list = ordered(ITEMS.filter(matches));

    if (!list.length) {
      empty.hidden = false;
      empty.textContent = ITEMS.length ? t(T.emptyCat) : t(T.emptyAll);
      return;
    }
    empty.hidden = true;

    list.forEach(function (item) {
      grid.appendChild(card(item));
    });
  }

  function card(item) {
    var c = el("article", "card"
      + (item.status === "sold" ? " is-sold" : "")
      + (item.status === "reserved" ? " is-reserved" : ""));
    var imgs = item.images || [];
    var primary = t(item.name);
    var secondary = t(item.name, other());

    /* media */
    var media;
    if (imgs.length) {
      media = el("button", "card-media");
      media.type = "button";
      media.setAttribute("aria-label", primary);
      var img = new Image();
      img.src = imgs[0];
      img.alt = primary;
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);
      if (imgs.length > 1) media.appendChild(el("span", "photo-count", "1/" + imgs.length));
      media.addEventListener("click", function () { openLightbox(item, 0); });
    } else {
      media = el("div", "card-media no-photo", catOf(item.category).emoji);
    }

    if (item.status === "sold") media.appendChild(el("span", "badge sold", t(T.sold)));
    else if (item.status === "reserved") media.appendChild(el("span", "badge reserved", t(T.reserved)));
    /* Sits on the opposite corner, so it can coexist with Reserved. A price cut
       gets the same corner, so an item that is both only shows New — the newer
       fact, and the one the badge window is short enough to be worth. */
    if (isNew(item)) media.appendChild(el("span", "badge new", t(T.justAdded)));
    else if (wasPrice(item)) media.appendChild(el("span", "badge cut", t(T.priceDrop)));

    c.appendChild(media);

    /* body */
    var body = el("div", "card-body");
    body.appendChild(el("div", "name-primary", primary));
    if (secondary && secondary !== primary) body.appendChild(el("div", "name-secondary", secondary));

    var note = t(item.note);
    if (note) body.appendChild(el("p", "note", note));

    var lf = linkFor(item);
    if (lf) {
      var a = el("a", "item-link", (item.linkLabel ? t(item.linkLabel) : lf.host) + " ↗");
      a.href = lf.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      body.appendChild(a);
    }

    /* Sold items say nothing about availability. Reserved ones keep a *date* —
       whoever is holding it still needs to know when to collect — but drop the
       green "Available now", which contradicts the Reserved badge. */
    var avail = null;
    if (item.status !== "sold") {
      var a = availability(item);
      if (item.status !== "reserved" || a.cls === "later") avail = a;
    }
    if (avail) body.appendChild(el("span", "avail " + avail.cls, avail.text));

    var p = priceText(item.price);
    var priceRow = el("div", "price " + p.cls);
    var was = wasPrice(item);
    if (was) priceRow.appendChild(el("span", "price-was", was));
    priceRow.appendChild(el("span", "price-now", p.text));
    body.appendChild(priceRow);

    c.appendChild(body);
    return c;
  }

  /* ---------- lightbox ---------- */

  var lb = { item: null, index: 0 };

  function openLightbox(item, index) {
    lb.item = item;
    lb.index = index;
    var box = document.getElementById("lightbox");
    box.hidden = false;
    document.body.style.overflow = "hidden";
    paintLightbox();
    document.querySelector(".lb-close").focus();
  }

  function closeLightbox() {
    document.getElementById("lightbox").hidden = true;
    document.body.style.overflow = "";
    lb.item = null;
  }

  function step(delta) {
    if (!lb.item) return;
    var n = lb.item.images.length;
    lb.index = (lb.index + delta + n) % n;
    paintLightbox();
  }

  function paintLightbox() {
    var imgs = lb.item.images;
    document.getElementById("lb-img").src = imgs[lb.index];
    document.getElementById("lb-img").alt = t(lb.item.name);
    document.getElementById("lb-title").textContent = t(lb.item.name);
    document.getElementById("lb-count").textContent =
      imgs.length > 1 ? (lb.index + 1) + " / " + imgs.length : "";
    var multi = imgs.length > 1;
    document.querySelector(".lb-prev").style.visibility = multi ? "" : "hidden";
    document.querySelector(".lb-next").style.visibility = multi ? "" : "hidden";
  }

  document.getElementById("lightbox").addEventListener("click", function (e) {
    var act = e.target.dataset ? e.target.dataset.lb : null;
    if (act === "close" || e.currentTarget === e.target) closeLightbox();
    else if (act === "prev") step(-1);
    else if (act === "next") step(1);
  });

  document.addEventListener("keydown", function (e) {
    if (document.getElementById("lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  /* swipe */
  var touchX = null;
  var box = document.getElementById("lightbox");
  box.addEventListener("touchstart", function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  /* ---------- language toggle ---------- */

  Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function (b) {
    b.addEventListener("click", function () {
      lang = b.dataset.lang;
      try { localStorage.setItem("sale-lang", lang); } catch (e) { /* ignore */ }
      renderChrome();
      renderFilters();
      renderGrid();
      if (lb.item) paintLightbox();
    });
  });

  renderChrome();
  renderFilters();
  renderGrid();
})();
