# Working on this repo

A one-page public listing of everything Veronica is selling/giving away before
leaving Japan. Live at <https://khaustova-me.github.io/sayonara-sale/>

**Veronica does not write code.** She drops photos in `inbox/` and describes the
item in chat ("the grey sofa, ¥5000"). You do everything else and push. Never
hand her a command to run unless she asks for one.

## The whole architecture

Plain HTML/CSS/JS. No build step, no dependencies, no package.json. Pushing to
`main` deploys via GitHub Pages. `index.html` also works by double-clicking it
locally — that's why the data lives in `.js` files assigning globals rather than
`.json` loaded with `fetch()`, which browsers block on `file://`.

- `data/items.js` — the item list. The only file that changes day to day.
- `data/config.js` — title, `subtitle` (opening line) and `intro` (the
  paragraphs under it), pickup date, LINE link, category definitions.
- `app.js` — renders everything; `style.css` — all styling.
- `tools/add_item.py` — photo pipeline + item upsert.

## Adding an item

```bash
python3 tools/add_item.py --en "Washing machine" --ja "洗濯機" \
    --price 8000 --category appliances IMG_1234.jpg IMG_1235.jpg
```

Bare photo filenames are resolved against `inbox/`. Other flags: `--note-en`,
`--note-ja`, `--status`, `--id`, `--replace-photos`, `--remove ID`, `--list`.

`--price 0` means free, `--price ask` means negotiable.
Categories: `vehicle appliances kitchen furniture kids clothes misc`.

Then delete the consumed photo from `inbox/` (it's git-ignored, but keeping it
tidy avoids re-adding the same thing twice), and commit.

## Translation

**You do the translation yourself** — no API, no service. Veronica gives the
English name only. Write natural, simple Japanese aimed at ordinary buyers:

- Everyday words over catalogue language: 洗濯機, not 全自動洗濯機能付き機器
- Keep brand names and model numbers in their original script
- Sizes stay as-is: 7kg, 32インチ
- If a term is genuinely ambiguous (a brand or a room-specific object), say so
  in chat rather than guessing. Wrong Japanese on a public page is worse than
  asking one question.

Both languages always render on the card — the selected one large, the other
small underneath — so a bad translation is visible to everyone.

## Photo pipeline — do not bypass it

`add_item.py` auto-rotates via the EXIF orientation flag, converts Display-P3
to sRGB, resizes the long edge to 1400px, re-encodes at JPEG q80, and rebuilds
the pixel buffer from scratch so **no metadata survives**.

That last part is not cosmetic: iPhone photos embed the GPS coordinates of the
apartment, and this repo is public. The script aborts if metadata is still
present after writing. Never copy a photo into `images/` by hand.

## Things Veronica will ask for

| She says | You do |
|---|---|
| "the sofa is sold" | `--id sofa --status sold` (never delete it — sold items grey out and sink to the bottom, which is intended) |
| "someone's coming for the fridge" | `--status reserved` |
| "pickup is Aug 23, 10–16" | edit `data/config.js` → `pickup.announced = true`, fill `date`/`place` in both languages |
| "here's my LINE" | set `contact.lineUrl` in `data/config.js` |
| "drop the price on X" | `--id x --price 3000` |

## Before pushing

Sanity-check with `node --check app.js data/items.js data/config.js`, then
commit and push to `main`. Pages redeploys in under a minute.

To actually look at the page, headless Chrome ignores `--window-size` (it lays
out at 500px regardless), so drive it over the DevTools protocol with
`--remote-debugging-port` and `Emulation.setDeviceMetricsOverride` if you need
a real mobile viewport.

## Deliberately absent

No framework, no CMS, no payment, no reservation system, no search. Chat is the
admin UI. Keep it that way unless asked — this site needs to still work,
untouched, three months from now.
