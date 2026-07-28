#!/usr/bin/env python3
"""
Add or update one item on the sayonara-sale page.

Photos are auto-rotated, resized, re-encoded, and stripped of ALL metadata
(including the GPS coordinates iPhones bake into every photo — this page is
public, so that matters).

Examples
--------
  # new item with two photos sitting in inbox/
  python3 tools/add_item.py --en "Washing machine" --ja "洗濯機" \\
      --price 8000 --category appliances IMG_1234.jpg IMG_1235.jpg

  # or keep an item's photos together in inbox/<folder>/ and pass the folder
  python3 tools/add_item.py --en "Washing machine" --ja "洗濯機" \\
      --price 8000 --category appliances \\
      --link https://panasonic.jp/wash/p-db/NA-FA7H1.html washing-machine/

  # give something away
  python3 tools/add_item.py --en "Box of kids books" --ja "子ども用の本" \\
      --price 0 --category kids books.jpg

  # mark it sold (no photos needed)
  python3 tools/add_item.py --id washing-machine --status sold

  # see what's listed
  python3 tools/add_item.py --list
"""

import argparse
import json
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
ITEMS_JS = ROOT / "data" / "items.js"
IMAGES = ROOT / "images"
INBOX = ROOT / "inbox"

MAX_EDGE = 1400
QUALITY = 80

HEADER = """/* ============================================================
   THE LIST. This is the only file that changes day to day.

   price: a number in yen, or 0 for free, or null for "ask me"
   status: "available" | "reserved" | "sold"
   images: [] is fine — the card shows the category emoji instead

   Written by tools/add_item.py, but hand-editing is fine too.
   ============================================================ */
"""


# --------------------------------------------------------------------------
# reading / writing data/items.js
# --------------------------------------------------------------------------

def load_items():
    """Evaluate items.js with node so hand-edits (comments, trailing commas,
    unquoted keys) survive round-tripping."""
    script = (
        "const fs=require('fs'),vm=require('vm');"
        f"const src=fs.readFileSync({json.dumps(str(ITEMS_JS))},'utf8');"
        "const ctx={window:{}};vm.createContext(ctx);vm.runInContext(src,ctx);"
        "process.stdout.write(JSON.stringify(ctx.window.SALE_ITEMS||[]));"
    )
    try:
        out = subprocess.run(
            ["node", "-e", script], capture_output=True, text=True, check=True
        )
    except subprocess.CalledProcessError as exc:
        sys.exit(f"Could not read {ITEMS_JS}:\n{exc.stderr.strip()}")
    return json.loads(out.stdout)


def save_items(items):
    body = json.dumps(items, ensure_ascii=False, indent=2)
    ITEMS_JS.write_text(f"{HEADER}window.SALE_ITEMS = {body};\n", encoding="utf-8")


# --------------------------------------------------------------------------
# photos
# --------------------------------------------------------------------------

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp", ".tif", ".tiff"}


def resolve(name):
    for candidate in (Path(name), INBOX / name, ROOT / name):
        if candidate.exists():
            return candidate
    sys.exit(f"Not found: {name}  (looked in ./ and inbox/)")


def expand_photos(names):
    """A name may be a single photo or a whole folder of them. Folders are the
    tidy way to keep 3-5 shots of one item together; files inside sort by name,
    so the first one alphabetically becomes the cover photo."""
    out = []
    for name in names:
        path = resolve(name)
        if path.is_dir():
            found = sorted(
                f for f in path.iterdir()
                if f.suffix.lower() in IMAGE_EXTS and not f.name.startswith(".")
            )
            if not found:
                sys.exit(f"No photos inside {path}/")
            print(f"  {path.name}/ -> {len(found)} photo(s): "
                  f"{', '.join(f.name for f in found)}")
            out.extend(found)
        else:
            out.append(path)
    return out


def open_image(path):
    """Pillow can't read HEIC, which is what iPhones shoot by default, so hand
    those to macOS sips first."""
    if path.suffix.lower() in (".heic", ".heif"):
        tmp = path.with_suffix(".sayonara-tmp.jpg")
        subprocess.run(
            ["sips", "-s", "format", "jpeg", str(path), "--out", str(tmp)],
            capture_output=True, check=True,
        )
        return Image.open(tmp), tmp
    return Image.open(path), None


def to_srgb(img):
    """iPhones shoot Display-P3. Dropping the profile without converting makes
    colours look flat, so convert properly when we can."""
    profile = img.info.get("icc_profile")
    if not profile:
        return img
    try:
        import io
        from PIL import ImageCms

        src = ImageCms.ImageCmsProfile(io.BytesIO(profile))
        return ImageCms.profileToProfile(
            img, src, ImageCms.createProfile("sRGB"), outputMode="RGB"
        ) or img
    except Exception:
        return img


def process_photo(src_path, dest_path):
    opened, tmp = open_image(src_path)
    try:
        with opened as img:
            img = ImageOps.exif_transpose(img)  # honour the rotation flag...
            img = to_srgb(img)
            if img.mode != "RGB":
                img = img.convert("RGB")
            img.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)

            # ...then rebuild the pixels into a fresh image so NOTHING from the
            # original file's metadata (GPS, timestamps, camera, thumbnails)
            # can ride along.
            clean = Image.frombytes(img.mode, img.size, img.tobytes())
    finally:
        if tmp and tmp.exists():
            tmp.unlink()

    clean.save(dest_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)

    with Image.open(dest_path) as check:
        if check.getexif():
            sys.exit(f"Refusing to continue: metadata survived in {dest_path.name}")

    kb = dest_path.stat().st_size / 1024
    print(f"  {src_path.name} -> images/{dest_path.name}  "
          f"({clean.width}x{clean.height}, {kb:.0f} KB, metadata stripped)")


# --------------------------------------------------------------------------

def slugify(text):
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii").lower()
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text or "item"


def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    ap.add_argument("photos", nargs="*", help="photo files (bare names are looked up in inbox/)")
    ap.add_argument("--id", help="item id; derived from --en if omitted")
    ap.add_argument("--en", help="name in English")
    ap.add_argument("--ja", help="name in Japanese")
    ap.add_argument("--price", help="yen, 0 for free, 'ask' for negotiable")
    ap.add_argument("--category", help="vehicle | appliances | kitchen | furniture | kids | clothes | misc")
    ap.add_argument("--note-en", dest="note_en")
    ap.add_argument("--note-ja", dest="note_ja")
    ap.add_argument("--link", help="manufacturer / spec page URL")
    ap.add_argument("--link-ja", dest="link_ja",
                    help="Japanese version of that page, if it differs")
    ap.add_argument("--link-label", dest="link_label",
                    help="text for the link (defaults to the site's domain)")
    ap.add_argument("--status", choices=["available", "reserved", "sold"])
    ap.add_argument("--available", metavar="WHEN",
                    help="YYYY-MM-DD if the item is in use until that date, or "
                         "'now' to clear it (everything is available now by "
                         "default, so 'now' just removes the date)")
    ap.add_argument("--replace-photos", action="store_true",
                    help="drop the item's existing photos instead of appending")
    ap.add_argument("--remove", metavar="ID", help="delete an item")
    ap.add_argument("--list", action="store_true", help="print the current list")
    ap.add_argument("--about", metavar="PHOTO",
                    help="process a photo of us for the intro (not a sale item)")
    ap.add_argument("--qr", metavar="PHOTO",
                    help="process a LINE QR code for the contact section")
    args = ap.parse_args()

    IMAGES.mkdir(exist_ok=True)

    if args.qr:
        src = resolve(args.qr)
        dest = IMAGES / "line-qr.png"
        with Image.open(src) as img:
            img = ImageOps.exif_transpose(img)
            if img.mode != "RGB":
                img = img.convert("RGB")
            img.thumbnail((700, 700), Image.LANCZOS)
            # PNG, not JPEG — JPEG ringing on hard black/white edges is exactly
            # what makes a QR code fail to scan.
            clean = Image.frombytes(img.mode, img.size, img.tobytes())
        clean.save(dest, "PNG", optimize=True)
        print(f"  {src.name} -> images/{dest.name} "
              f"({clean.width}x{clean.height}, {dest.stat().st_size / 1024:.0f} KB)")
        print('Now set contact.qr to "images/line-qr.png" in data/config.js.')
        return

    if args.about:
        src = resolve(args.about)
        if src.is_dir():
            sys.exit("--about takes a single photo, not a folder.")
        dest = IMAGES / "about-us.jpg"
        print("Photo of us:")
        process_photo(src, dest)
        print('Now set aboutPhoto.src to "images/about-us.jpg" in data/config.js.')
        return
    items = load_items()
    index = {it["id"]: it for it in items}

    if args.list:
        for it in items:
            price = "FREE" if it.get("price") == 0 else (
                "ask" if it.get("price") is None else f"¥{it['price']:,}")
            mark = {"sold": "[SOLD]", "reserved": "[RSVD]", "available": "      "}
            print(f"{mark.get(it.get('status'), '      ')} {it['id']:<28} "
                  f"{price:>8}  {it.get('category', ''):<11} "
                  f"{len(it.get('images', []))} photo(s)  {it['name'].get('en', '')}")
        return

    if args.remove:
        if args.remove not in index:
            sys.exit(f"No item with id '{args.remove}'.")
        items = [it for it in items if it["id"] != args.remove]
        save_items(items)
        print(f"Removed '{args.remove}'. Its photos are still in images/ if you want them back.")
        return

    item_id = args.id or (slugify(args.en) if args.en else None)
    if not item_id:
        sys.exit("Need --id or --en to know which item this is.")

    item = index.get(item_id)
    is_new = item is None
    if is_new:
        if not args.en:
            sys.exit(f"'{item_id}' is new, so --en is required.")
        item = {
            "id": item_id,
            "name": {"en": args.en, "ja": args.ja or args.en},
            "price": 0,
            "category": args.category or "misc",
            "status": "available",
            "images": [],
            "note": {"en": "", "ja": ""},
        }
        items.append(item)

    if args.en:
        item["name"]["en"] = args.en
    if args.ja:
        item["name"]["ja"] = args.ja
    if args.category:
        item["category"] = args.category
    if args.status:
        item["status"] = args.status
    if args.note_en is not None:
        item.setdefault("note", {})["en"] = args.note_en
    if args.note_ja is not None:
        item.setdefault("note", {})["ja"] = args.note_ja

    if args.available:
        when = args.available.lower()
        # "available now" is the default, so it is stored as the absence of a
        # date rather than as a value.
        if when in ("now", "pickup", "none", "clear"):
            item.pop("available", None)
        elif re.fullmatch(r"\d{4}-\d{2}-\d{2}", when):
            item["available"] = when
        else:
            sys.exit("--available takes a YYYY-MM-DD date, or 'now' to clear it.")

    if args.link or args.link_ja:
        for url in (args.link, args.link_ja):
            if url and not url.startswith(("http://", "https://")):
                sys.exit(f"Link must start with http:// or https:// — got '{url}'")
        if args.link_ja and args.link and args.link_ja != args.link:
            item["link"] = {"en": args.link, "ja": args.link_ja}
        else:
            item["link"] = args.link or args.link_ja
    if args.link_label:
        item["linkLabel"] = {"en": args.link_label, "ja": args.link_label}

    if args.price is not None:
        if args.price.lower() in ("ask", "none", "null"):
            item["price"] = None
        else:
            item["price"] = int(str(args.price).replace(",", "").replace("¥", ""))

    if args.replace_photos:
        item["images"] = []

    if args.photos:
        print(f"Photos for '{item_id}':")
        files = expand_photos(args.photos)
        start = len(item["images"])
        for offset, src in enumerate(files, start=1):
            dest = IMAGES / f"{item_id}-{start + offset}.jpg"
            process_photo(src, dest)
            item["images"].append(f"images/{dest.name}")

    save_items(items)
    print(f"{'Added' if is_new else 'Updated'} '{item_id}' "
          f"({len(item['images'])} photo(s)). Now commit and push.")


if __name__ == "__main__":
    main()
