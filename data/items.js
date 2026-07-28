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
    },
    "link": {
      "en": "https://www.amazon.co.jp/-/en/dp/B0DBPRSJRP",
      "ja": "https://www.amazon.co.jp/dp/B0DBPRSJRP"
    },
    "linkLabel": {
      "en": "similar model on Amazon",
      "ja": "類似モデル（Amazon）"
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
      "en": "Hand blender — Braun MultiQuick 5 MQ 500",
      "ja": "ハンドブレンダー ブラウン マルチクイック5 MQ 500"
    },
    "price": 1000,
    "category": "kitchen",
    "status": "available",
    "images": [
      "images/blender-1.jpg",
      "images/blender-2.jpg",
      "images/blender-3.jpg"
    ],
    "note": {
      "en": "Braun MQ 500, 350 W. Complete with the blender shaft, 600 ml beaker and the original box — this model is blender-only, it never came with a chopper or whisk. Works fine.",
      "ja": "ブラウン MQ 500、350W。本体・ブレンダー・600ml計量カップ・元箱つき。このモデルはブレンダーのみで、チョッパーや泡立て器はもともと付属しません。問題なく使えます。"
    },
    "link": "https://www.braunhousehold.com/ja-jp/%E3%83%9E%E3%83%AB%E3%83%81%E3%82%AF%E3%82%A4%E3%83%83%E3%82%AF-5-%E3%83%8F%E3%83%B3%E3%83%89%E3%83%96%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC-mq-500-gy/p/4165-MQ500GY"
  },
  {
    "id": "stroller-car-seat",
    "name": {
      "en": "Joie Litetrax Air stroller + i-Snug car seat",
      "ja": "ジョイー ベビーカー ライトトラックスエア + チャイルドシート アイスナグ"
    },
    "price": 22000,
    "category": "kids",
    "status": "available",
    "images": [
      "images/stroller-car-seat-1.jpg",
      "images/stroller-car-seat-2.jpg",
      "images/stroller-car-seat-3.jpg",
      "images/stroller-car-seat-4.jpg",
      "images/stroller-car-seat-5.jpg",
      "images/stroller-car-seat-6.jpg",
      "images/stroller-car-seat-7.jpg"
    ],
    "note": {
      "en": "The i-Size car seat clicks straight onto the stroller, so a sleeping baby goes from the car to the stroller without waking. Includes the ISOFIX i-Base, rain cover and original boxes. Rear air tyres; folds to 85 x 53 x 28.5 cm. The stroller alone retails at 33,880 yen.",
      "ja": "i-Sizeチャイルドシートをそのままベビーカーに装着できるので、寝ている赤ちゃんを起こさずに車から移動できます。ISOFIX対応のi-Base、レインカバー、元箱つき。後輪エアタイヤ、折りたたみサイズ85×53×28.5cm。ベビーカー単体の希望小売価格は33,880円。"
    },
    "link": "https://www.katoji.co.jp/products-detail_2278.html"
  }
];
