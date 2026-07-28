# Sayonara Sale — Plan

A simple public webpage listing everything we're selling/giving away before
leaving Japan. Photos + prices + categories + LINE contact.

Decisions made (2026-07-28):

- **Contact:** LINE only. No phone number on the public page.
- **Language:** English + Japanese, with a toggle.
- **Photo handoff:** Veronica drops photos into `inbox/`, says the name + price
  in chat, Claude does the rest.
- **Hosting:** GitHub Pages, public repo `khaustova-me/sayonara-sale`.
  Live at <https://khaustova-me.github.io/sayonara-sale/>

---

## 1. Guiding constraints

| Constraint | Consequence |
|---|---|
| Veronica should never touch code | All edits go through chat; a script does the mechanical work |
| Must survive context loss / usage limits | Workflow documented in `CLAUDE.md`; data in one obvious file |
| Buyers will be on phones | Mobile-first, fast, small images, no framework |
| Page is public on the internet | Strip EXIF/GPS from photos; no phone number; no home address until pickup day |
| Zero maintenance | No build step, no npm install, no dependencies to keep alive |

**No framework, no build step.** Plain HTML + CSS + one JS file. `git push` is
the deploy. Nothing to break in three months.

## 2. Repo layout

```
sayonara-sale/
├── index.html            # the whole page
├── style.css
├── app.js                # render, filter, language toggle, lightbox
├── data/
│   ├── config.js         # sale title, pickup date/place, LINE link, categories
│   └── items.js          # THE list of items — the only file that changes often
├── images/               # optimized, EXIF-stripped photos (committed)
├── inbox/                # drop raw photos here (git-ignored, never published)
├── tools/
│   └── add_item.py       # resize + strip EXIF + file photo + append to items.js
├── CLAUDE.md             # workflow notes for future Claude sessions
├── PLAN.md               # this file
└── README.md
```

Data lives in `.js` files (`window.SALE_ITEMS = [...]`) rather than `.json`, so
`index.html` can be **opened by double-clicking it locally** to preview. JSON +
`fetch()` is blocked by the browser on `file://`. Same content, one less
footgun.

## 3. Item data shape

```js
{
  id: "washing-machine",
  name: { en: "Washing machine — Panasonic 7kg", ja: "洗濯機 パナソニック 7kg" },
  price: 8000,                    // yen; 0 means FREE / 無料
  category: "appliances",
  status: "available",            // available | reserved | sold
  images: ["images/washing-machine-1.jpg", "images/washing-machine-2.jpg"],
  note: { en: "Bought 2023, works perfectly", ja: "2023年購入、動作良好" }
}
```

Japanese text will be machine-translated on entry and flagged for Veronica to
correct — a wrong translation on a public page is worse than no translation, so
anything uncertain gets called out in chat rather than silently published.

**Categories** (defined in `config.js`, each with EN/JA label + emoji):

`vehicle` 🚗 · `appliances` 🔌 · `kitchen` 🍳 · `furniture` 🪑 ·
`kids` 🧸 · `clothes` 👕 · `misc` 📦

Easy to add more later.

## 4. Page features

- Responsive card grid — 1 column on phone, 2–4 on desktop
- Sticky header: sale title, pickup date/place banner, EN/日本語 toggle, LINE button
- Category filter chips + a **Free / 無料** filter
- `SOLD` / `RESERVED` badges — sold items grey out and drop to the bottom
  (kept visible, not deleted, so people can see what's gone)
- Tap a photo → full-screen lightbox, swipe between multiple photos
- Lazy-loaded images so the page is fast on mobile data
- Footer: pickup day/time, LINE contact, "first come first served" note
- Dark-mode aware (respects the phone's setting)

## 5. Photo pipeline (`tools/add_item.py`, uses Pillow — already installed)

For each photo:

1. Auto-rotate using the EXIF orientation flag, then **discard all metadata**
   (removes GPS coordinates of our apartment, camera info, timestamps)
2. Resize longest edge to 1400px
3. Save as JPEG quality 80 → typically ~150–250 KB
4. Rename to `images/<item-id>-1.jpg`
5. Append/update the entry in `data/items.js`

The script is also runnable by hand if Veronica ever wants to add something
without Claude.

## 6. The day-to-day workflow

1. Drop photos into `inbox/`
2. Say in chat: *"the grey sofa, ¥5000"* or *"kids books, free"*
3. Claude processes, translates, commits, pushes — live in about a minute
4. To mark sold: *"washing machine is sold"*
5. To set the pickup day: *"pickup is Aug 23, 10:00–16:00"*

## 7. Execution order

1. `git init`, `.gitignore`, scaffold files
2. Build `index.html` / `style.css` / `app.js` with 2–3 placeholder items
3. Write `tools/add_item.py` and verify on a real photo (check rotation + that
   EXIF is actually gone)
4. Write `CLAUDE.md` + `README.md`
5. Create the public GitHub repo, push, enable Pages
6. Confirm the live URL works on a phone
7. Replace placeholders with real items as photos arrive

## 8. Still needed from Veronica

- **LINE link** — LINE app → Settings → Profile → *Share* / ID, gives a
  `https://line.me/ti/p/...` URL. Placeholder until then; the site ships without it.
- **Pickup date/time + whether to show the address** (recommendation: show the
  station and area publicly, send the exact apartment number over LINE)
- **Sale title** — default: "Sayonara Sale — Moving from Japan"

## 9. Deliberately not doing (yet)

- Online payment / reservations — overkill; LINE handles it
- A CMS or admin UI — chat *is* the admin UI
- Search — with under ~100 items, filters are enough
- QR code poster for the elevator/neighbors — easy to add later, say the word
