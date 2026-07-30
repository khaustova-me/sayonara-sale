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
    "price": 500,
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
      "en": "Joie travel system — stroller + i-Snug car seat + ISOFIX base",
      "ja": "ジョイー トラベルシステム ベビーカー＋アイスナグ＋ISOFIXベース"
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
      "en": "Sold together as one set: the Litetrax Air stroller, the i-Snug i-Size infant carrier (ECE R129/02, for 40-75 cm) and the ISOFIX i-Base. The carrier clicks straight onto the stroller, so a sleeping baby goes from the car to the stroller without waking. Rain cover and all original boxes included. Rear air tyres; folds to 85 x 53 x 28.5 cm. The stroller on its own retails at 33,880 yen.",
      "ja": "3点セットでのお譲りです：ベビーカー ライトトラックスエア、ベビーシート アイスナグ（ECE R129/02適合、身長40〜75cm）、ISOFIX対応 i-Base。ベビーシートをそのままベビーカーに装着できるので、寝ている赤ちゃんを起こさずに車から移動できます。レインカバー・元箱すべて付属。後輪エアタイヤ、折りたたみサイズ85×53×28.5cm。ベビーカー単体の希望小売価格は33,880円です。"
    },
    "link": "https://www.katoji.co.jp/products-detail_2278.html"
  },
  {
    "id": "car-seat-combi",
    "name": {
      "en": "Car seat — Combi, rotating (brown)",
      "ja": "チャイルドシート コンビ 回転式（ブラウン）"
    },
    "price": 500,
    "category": "kids",
    "status": "available",
    "images": [
      "images/car-seat-combi-1.jpg",
      "images/car-seat-combi-2.jpg",
      "images/car-seat-combi-3.jpg"
    ],
    "note": {
      "en": "The seat rotates to face the door, which makes lifting a child in and out much easier. Fitted with the car's own seatbelt.",
      "ja": "座面が回転してドア側を向くので、乗せ降ろしがとても楽です。車のシートベルトで固定するタイプです。"
    },
    "available": "2026-08-28"
  },
  {
    "id": "car-seat-besafe",
    "name": {
      "en": "Car seat — BeSafe (blue)",
      "ja": "チャイルドシート ビーセーフ（ブルー）"
    },
    "price": 500,
    "category": "kids",
    "status": "available",
    "images": [
      "images/car-seat-besafe-1.jpg",
      "images/car-seat-besafe-2.jpg"
    ],
    "note": {
      "en": "BeSafe seat in blue, for a toddler. Deep side supports and a padded harness.",
      "ja": "ブルーのビーセーフ製チャイルドシート。幼児用。サイドサポートが深く、ハーネスもクッションつきです。"
    },
    "available": "2026-08-28"
  },
  {
    "id": "car",
    "name": {
      "en": "Toyota Crown Royal Saloon (2005)",
      "ja": "トヨタ クラウン ロイヤルサルーン 平成17年"
    },
    "price": 150000,
    "category": "vehicle",
    "status": "available",
    "images": [
      "images/car-1.jpg",
      "images/car-2.jpg",
      "images/car-3.jpg",
      "images/car-4.jpg",
      "images/car-5.jpg",
      "images/car-6.jpg"
    ],
    "note": {
      "en": "3.0 V6 (3GR-FSE, 256 ps), rear-wheel drive, automatic. 156,432 km. Shaken is already paid until 2028/04/26 — about 21 months left — so the next owner has no inspection to pay for, and all taxes are paid too. Beige leather, wood trim, factory navigation. The passenger-side dashboard trim is cracked and the driver's seat is worn — both are in the photos. Price and handover date are negotiable, so please just ask.",
      "ja": "3.0L V6（3GR-FSE、256馬力）、FR、オートマ。走行156,432km。車検は令和10年4月26日まで（残り約1年9か月）有効ですので、次の車検費用はかかりません。税金もすべて納めています。ベージュの本革シート、木目調パネル、純正ナビ。助手席側のダッシュボードにひび割れ、運転席シートに擦れがあります（写真をご覧ください）。価格・お渡し日はご相談に応じますので、お気軽にお問い合わせください。"
    },
    "link": "https://gazoo.com/catalog/maker/TOYOTA/CROWN/200312/10030036/",
    "linkLabel": {
      "en": "Toyota catalogue (GAZOO)",
      "ja": "トヨタ カタログ（GAZOO）"
    },
    "available": "2026-08-28"
  },
  {
    "id": "puzzle-vehicles",
    "name": {
      "en": "Sound puzzle — Vehicles (Melissa & Doug)",
      "ja": "音の出るパズル のりもの（メリッサ＆ダグ）"
    },
    "price": 400,
    "category": "kids",
    "status": "available",
    "images": [
      "images/puzzle-vehicles-1.jpg",
      "images/puzzle-vehicles-2.jpg"
    ],
    "note": {
      "en": "Wooden peg puzzle, 8 pieces, ages 2+. Each piece plays its own sound when you put it in place, and there is a picture underneath it. All the sounds work. Runs on 2 AAA batteries. Some marks on the board from use.",
      "ja": "木製のつまみ付きパズル、8ピース、2歳から。ピースをはめると、それぞれの音が鳴ります。ピースの下には絵が描かれています。音はすべて出ます。単4電池2本使用。使用による小さな傷があります。"
    }
  },
  {
    "id": "puzzle-instruments",
    "name": {
      "en": "Sound puzzle — Musical instruments (Melissa & Doug)",
      "ja": "音の出るパズル 楽器（メリッサ＆ダグ）"
    },
    "price": 400,
    "category": "kids",
    "status": "available",
    "images": [
      "images/puzzle-instruments-1.jpg",
      "images/puzzle-instruments-2.jpg"
    ],
    "note": {
      "en": "Wooden peg puzzle, 8 pieces, ages 2+. Each piece plays its own sound when you put it in place, and there is a picture underneath it. All the sounds work. Runs on 2 AAA batteries. Some marks on the board from use.",
      "ja": "木製のつまみ付きパズル、8ピース、2歳から。ピースをはめると、それぞれの音が鳴ります。ピースの下には絵が描かれています。音はすべて出ます。単4電池2本使用。使用による小さな傷があります。"
    }
  },
  {
    "id": "puzzle-zoo",
    "name": {
      "en": "Sound puzzle — Zoo animals (Melissa & Doug)",
      "ja": "音の出るパズル 動物園の動物（メリッサ＆ダグ）"
    },
    "price": 400,
    "category": "kids",
    "status": "available",
    "images": [
      "images/puzzle-zoo-1.jpg",
      "images/puzzle-zoo-2.jpg"
    ],
    "note": {
      "en": "Wooden peg puzzle, 8 pieces, ages 2+. Each piece plays its own sound when you put it in place, and there is a picture underneath it. All the sounds work. Runs on 2 AAA batteries. Some marks on the board from use.",
      "ja": "木製のつまみ付きパズル、8ピース、2歳から。ピースをはめると、それぞれの音が鳴ります。ピースの下には絵が描かれています。音はすべて出ます。単4電池2本使用。使用による小さな傷があります。"
    }
  },
  {
    "id": "puzzle-farm",
    "name": {
      "en": "Sound puzzle — Farm animals (Melissa & Doug)",
      "ja": "音の出るパズル 牧場の動物（メリッサ＆ダグ）"
    },
    "price": 300,
    "category": "kids",
    "status": "available",
    "images": [
      "images/puzzle-farm-1.jpg",
      "images/puzzle-farm-2.jpg"
    ],
    "note": {
      "en": "Wooden peg puzzle, 8 pieces, ages 2+. Each piece plays its own sound when you put it in place, and there is a picture underneath it. Every sound works except the sheep, which is why this one is cheaper than the others. Runs on 2 AAA batteries. Some marks on the board from use.",
      "ja": "木製のつまみ付きパズル、8ピース、2歳から。ピースをはめると、それぞれの音が鳴ります。ピースの下には絵が描かれています。ひつじの音だけ鳴らないため、他より少しお安くしています。単4電池2本使用。使用による小さな傷があります。"
    }
  },
  {
    "id": "playground",
    "name": {
      "en": "Kids' climbing frame with slide",
      "ja": "すべり台つき ジャングルジム"
    },
    "price": 0,
    "category": "kids",
    "status": "available",
    "images": [
      "images/playground-1.jpg",
      "images/playground-2.jpg"
    ],
    "note": {
      "en": "Really good fun to climb on — slide, climbing wall, steps and a basketball hoop. It folds flat for transport, as in the second photo. It has been standing outside, so it needs a wash. Free to a good home. If you need it delivered we can do that for 1,000 yen.",
      "ja": "登って遊ぶのがとても楽しい遊具です。すべり台、クライミングウォール、ステップ、バスケットゴールつき。2枚目の写真のように折りたたんで運べます。屋外に置いていたので、洗っていただく必要があります。無料でお譲りします。配送をご希望の場合は1,000円で承ります。"
    }
  },
  {
    "id": "storage-baskets",
    "name": {
      "en": "Plastic storage baskets and boxes — lots of them",
      "ja": "プラスチックの収納ケース・カゴ たくさんあります"
    },
    "price": 0,
    "category": "misc",
    "status": "available",
    "images": [
      "images/storage-baskets-1.jpg",
      "images/storage-baskets-2.jpg"
    ],
    "note": {
      "en": "We have many different storage baskets and boxes in all sorts of sizes and shapes — the one in the photos is just an example. Please have a look and take whatever is useful to you. All free.",
      "ja": "収納ケースやカゴがたくさんあります。サイズも形もいろいろで、写真はその一例です。ぜひご覧いただき、使えそうなものをお持ちください。すべて無料です。"
    }
  },
  {
    "id": "cot-white",
    "name": {
      "en": "Baby cot — Katoji, folding, white (120 x 70 cm)",
      "ja": "ベビーベッド カトージ 折りたたみ ホワイト（内寸120×70cm）"
    },
    "price": 0,
    "category": "kids",
    "status": "available",
    "images": [
      "images/cot-white-1.jpg"
    ],
    "note": {
      "en": "Inner size 120 x 70 cm, for use up to around 24 months. Folds away for storage. Comes with the mattress or futon and the covers, if you would like them. All the parts are there — some are taken apart at the moment, but nothing is missing.",
      "ja": "内寸120×70cm、24か月頃まで使えます。折りたたんで収納できます。マットレス（またはお布団）とカバーもご希望であればお付けします。部品はすべて揃っています。一部を分解していますが、欠品はありません。"
    },
    "link": {
      "en": "https://www.amazon.co.jp/-/en/dp/B0CKBF6PYH",
      "ja": "https://www.amazon.co.jp/dp/B0CKBF6PYH"
    },
    "available": "2026-08-25"
  },
  {
    "id": "cot-wood",
    "name": {
      "en": "Baby cot — natural wood (120 x 70 cm)",
      "ja": "ベビーベッド 木製ナチュラル（120×70cm）"
    },
    "price": 0,
    "category": "kids",
    "status": "available",
    "images": [
      "images/cot-wood-1.jpg"
    ],
    "note": {
      "en": "Same size as the white one, 120 x 70 cm. Comes with the mattress or futon and the covers, if you would like them. All the parts are there — some are taken apart at the moment, but nothing is missing. The baby monitor camera on the stand in the photo is not included.",
      "ja": "白いベッドと同じサイズ、120×70cmです。マットレス（またはお布団）とカバーもご希望であればお付けします。部品はすべて揃っています。一部を分解していますが、欠品はありません。写真に写っているベビーモニターのカメラは付きません。"
    },
    "available": "2026-08-25"
  },
  {
    "id": "scooter",
    "name": {
      "en": "Kids' scooter — Oxelo B1, three wheels",
      "ja": "キックスケーター オクセロ B1 3輪"
    },
    "price": 500,
    "category": "kids",
    "status": "available",
    "images": [
      "images/scooter-1.jpg"
    ],
    "note": {
      "en": "Three-wheel scooter for ages 2 and up. You steer it by leaning — the handlebar tilts the deck, so a small child keeps their balance through turns. Some scuffs from use.",
      "ja": "2歳から使える3輪キックスケーター。ハンドルを傾けるとデッキも傾く仕組みで、小さな子どもでもカーブでバランスを崩しにくくなっています。使用による小さな傷があります。"
    },
    "link": "https://www.decathlon.co.jp/collections/kids-scooters",
    "linkLabel": {
      "en": "Oxelo at Decathlon",
      "ja": "オクセロ（デカトロン）"
    }
  },
  {
    "id": "water-pot",
    "name": {
      "en": "Electric hot water pot — Zojirushi CD-WY30, 3 L",
      "ja": "マイコン沸とう電動ポット 象印 CD-WY30 3.0L"
    },
    "price": 1200,
    "category": "kitchen",
    "status": "available",
    "images": [
      "images/water-pot-1.jpg",
      "images/water-pot-2.jpg"
    ],
    "note": {
      "en": "3 litres. Keeps the water at 98, 90 or 70 degrees, has a slow cafe-drip pour for coffee, and a 7-hour timer. Bought new about three years ago and comes with the manual.",
      "ja": "容量3.0L。保温は98℃・90℃・70℃の3段階、コーヒー用のドリップ給湯、7時間タイマーつき。3年ほど前に新品で購入しました。取扱説明書もお付けします。"
    },
    "link": "https://www.zojirushi.co.jp/syohin/electronic-pot/cdwy/"
  }
];
