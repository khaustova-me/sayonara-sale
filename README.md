# Sayonara Sale 🇯🇵📦

Everything we're selling or giving away before we move away from Japan.

**→ <https://khaustova-me.github.io/sayonara-sale/>**

Photos, prices, categories, in English and Japanese. Contact over LINE.

---

## How to add something

1. Put the photos in the `inbox/` folder — if an item has several photos, give it
   its own folder like `inbox/washing-machine/`
2. Tell Claude in chat: *"the grey sofa, ¥5000"* or *"box of kids books, free"*

That's it. Claude resizes the photos, writes the Japanese, updates the list, and
pushes. The page is live about a minute later.

Same for anything else: *"the washing machine is sold"*, *"pickup is Aug 23,
10:00–16:00"*, *"drop the microwave to ¥2000"*.

## If you'd rather do it yourself

```bash
# add an item with two photos from inbox/
python3 tools/add_item.py --en "Washing machine" --ja "洗濯機" \
    --price 8000 --category appliances IMG_1234.jpg IMG_1235.jpg

# or pass a whole folder, plus a link to the manufacturer's page
python3 tools/add_item.py --en "Washing machine" --ja "洗濯機" \
    --price 8000 --category appliances \
    --link https://panasonic.jp/wash/p-db/NA-FA7H1.html washing-machine/

# mark it sold
python3 tools/add_item.py --id washing-machine --status sold

# still using it until we leave / can go right away
python3 tools/add_item.py --id bed --available 2026-08-28
python3 tools/add_item.py --id hairdryer --available now

# see everything
python3 tools/add_item.py --list
```

`--price 0` = free · `--price ask` = negotiable
Categories: `vehicle` `appliances` `kitchen` `furniture` `kids` `clothes` `misc`

`--link` adds a "more info" link on the card, shown as the site's domain. Use
`--link-ja` as well if the maker has a separate Japanese page.

Then `git add -A && git commit -m "add washing machine" && git push`.

To preview before pushing, just double-click `index.html`.

## A note on photos

Every photo is stripped of its metadata before it's published — phone photos
carry the GPS coordinates of wherever they were taken, and this site is public.
The tool refuses to write a file if any metadata survives. So always add photos
through the tool, never by copying them into `images/` by hand.

## What's in here

```
index.html · style.css · app.js    the page
data/items.js                      the list of things (this is what changes)
data/config.js                     title, pickup day, LINE link, categories
images/                            published photos
inbox/                             drop raw photos here (not published)
tools/add_item.py                  photo processing + list editing
```

No build step, no dependencies, no npm install. Push to `main` and GitHub Pages
does the rest.
