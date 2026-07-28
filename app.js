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
    emptyAll:   { en: "Nothing listed yet — photos are coming soon.", ja: "まだ掲載がありません。写真を準備中です。" }
  };

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

  function priceText(price) {
    if (price === 0) return { text: t(T.freePrice), cls: "is-free" };
    if (price === null || price === undefined || price === "") return { text: t(T.ask), cls: "is-ask" };
    var cur = CONFIG.currency || "¥";
    return { text: cur + Number(price).toLocaleString("en-US"), cls: "" };
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null && text !== "") n.textContent = text;
    return n;
  }

  /* ---------- ordering: sold items sink to the bottom ---------- */

  function ordered(list) {
    return list.slice().sort(function (a, b) {
      var as = a.status === "sold" ? 1 : 0;
      var bs = b.status === "sold" ? 1 : 0;
      return as - bs;
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
    if (p.announced) {
      var parts = [t(p.date), t(p.place)].filter(Boolean);
      banner.textContent = "📅 " + parts.join(" · ");
    } else {
      banner.textContent = "📅 " + t(p.tba);
    }

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
    var c = el("article", "card" + (item.status === "sold" ? " is-sold" : ""));
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

    c.appendChild(media);

    /* body */
    var body = el("div", "card-body");
    body.appendChild(el("div", "name-primary", primary));
    if (secondary && secondary !== primary) body.appendChild(el("div", "name-secondary", secondary));

    var note = t(item.note);
    if (note) body.appendChild(el("p", "note", note));

    var p = priceText(item.price);
    body.appendChild(el("div", "price " + p.cls, p.text));

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
