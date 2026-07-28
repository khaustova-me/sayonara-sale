/* ============================================================
   THE LIST. This is the only file that changes day to day.

   price: a number in yen, or 0 for free, or null for "ask me"
   status: "available" | "reserved" | "sold"
   images: [] is fine — the card shows the category emoji instead

   Written by tools/add_item.py, but hand-editing is fine too.
   ============================================================ */
window.SALE_ITEMS = [
  {
    "id": "washing-machine",
    "name": {
      "en": "Drum washing machine — IRIS Ohyama 7.5 kg",
      "ja": "ドラム式洗濯機 アイリスオーヤマ 7.5kg"
    },
    "price": 17000,
    "category": "appliances",
    "status": "available",
    "images": [
      "images/washing-machine-1.jpg",
      "images/washing-machine-2.jpg"
    ],
    "note": {
      "en": "Model HD72J. Bought new in April 2022 for ¥53,900. Warm-water and indoor-drying courses. 595 x 672 x 860 mm. Manual included.",
      "ja": "型番HD72J。2022年4月に新品で購入（53,900円）。温水コース・部屋干しコースつき。幅595×奥行672×高さ860mm。取扱説明書つきです。"
    },
    "link": "https://www.irisohyama.co.jp/products/electrical-appliances/large-appliances/washing-machine/front-load-washers/drum-type-washing-machine-hd71-w-s",
    "available": "2026-08-25"
  },
  {
    "id": "hair-dryer",
    "name": {
      "en": "Hair dryer — TESCOM ione",
      "ja": "ドライヤー テスコム ione"
    },
    "price": 1000,
    "category": "appliances",
    "status": "available",
    "images": [
      "images/hair-dryer-1.jpg"
    ],
    "note": {
      "en": "TESCOM ione TID930. Negative ion, foldable, 1.8 m3/min airflow, cool and turbo settings. Nozzle attachment included. Works perfectly, we just don't use it any more.",
      "ja": "テスコム ione TID930。マイナスイオン、折りたたみ式、大風量1.8㎥/分、冷風・ターボ切替つき。ノズルアタッチメントつき。問題なく使えますが、使わなくなりました。"
    }
  },
  {
    "id": "printer",
    "name": {
      "en": "Printer / scanner — Epson EP-810AB",
      "ja": "プリンター エプソン カラリオ EP-810AB"
    },
    "price": 15000,
    "category": "appliances",
    "status": "available",
    "images": [
      "images/printer-1.jpg",
      "images/printer-2.jpg"
    ],
    "note": {
      "en": "Prints, copies and scans, and does photo prints. Works perfectly. Comes with a full set of colour cartridges and some paper. 2017 model.",
      "ja": "コピー・スキャン、写真プリントもできます。問題なく動作します。カラーインクカートリッジ一式と用紙も少しお付けします。2017年発売モデル。"
    },
    "link": "https://www.epson.jp/support/portal/support_menu/ep-810ab.htm"
  },
  {
    "id": "blender",
    "name": {
      "en": "Hand blender — Braun MultiQuick 5",
      "ja": "ハンドブレンダー ブラウン マルチクイック5"
    },
    "price": 1000,
    "category": "kitchen",
    "status": "available",
    "images": [],
    "note": {
      "en": "Blender attachment only — no chopper bowl and no whisk. Works fine.",
      "ja": "ブレンダー部分のみで、チョッパーや泡立て器は付きません。問題なく使えます。"
    },
    "link": {
      "en": "https://www.amazon.co.jp/-/en/dp/B0FTMR59ZY",
      "ja": "https://www.amazon.co.jp/dp/B0FTMR59ZY"
    }
  }
];
