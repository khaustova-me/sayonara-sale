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
    "available": "2026-08-25",
    "added": "2026-07-28"
  },
  {
    "id": "hair-dryer",
    "name": {
      "en": "Hair dryer — TESCOM ione",
      "ja": "ドライヤー テスコム ione"
    },
    "price": 500,
    "category": "appliances",
    "status": "reserved",
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
    },
    "added": "2026-07-28"
  },
  {
    "id": "printer",
    "name": {
      "en": "Printer / scanner — Epson EP-810AB",
      "ja": "プリンター エプソン カラリオ EP-810AB"
    },
    "price": 15000,
    "category": "appliances",
    "status": "reserved",
    "images": [
      "images/printer-1.jpg",
      "images/printer-2.jpg"
    ],
    "note": {
      "en": "Prints, copies and scans, and does photo prints. Works perfectly. Comes with a full set of colour cartridges and some paper. 2017 model.",
      "ja": "コピー・スキャン、写真プリントもできます。問題なく動作します。カラーインクカートリッジ一式と用紙も少しお付けします。2017年発売モデル。"
    },
    "link": "https://www.epson.jp/support/portal/support_menu/ep-810ab.htm",
    "added": "2026-07-28"
  },
  {
    "id": "blender",
    "name": {
      "en": "Hand blender — Braun MultiQuick 5 MQ 500",
      "ja": "ハンドブレンダー ブラウン マルチクイック5 MQ 500"
    },
    "price": 500,
    "category": "kitchen",
    "status": "reserved",
    "images": [
      "images/blender-1.jpg",
      "images/blender-2.jpg",
      "images/blender-3.jpg"
    ],
    "note": {
      "en": "Braun MQ 500, 350 W. Complete with the blender shaft, 600 ml beaker and the original box — this model is blender-only, it never came with a chopper or whisk. Works fine.",
      "ja": "ブラウン MQ 500、350W。本体・ブレンダー・600ml計量カップ・元箱つき。このモデルはブレンダーのみで、チョッパーや泡立て器はもともと付属しません。問題なく使えます。"
    },
    "link": "https://www.braunhousehold.com/ja-jp/%E3%83%9E%E3%83%AB%E3%83%81%E3%82%AF%E3%82%A4%E3%83%83%E3%82%AF-5-%E3%83%8F%E3%83%B3%E3%83%89%E3%83%96%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC-mq-500-gy/p/4165-MQ500GY",
    "added": "2026-07-28"
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
    "link": "https://www.katoji.co.jp/products-detail_2278.html",
    "added": "2026-07-28"
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
    "available": "2026-08-28",
    "added": "2026-07-28"
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
    "available": "2026-08-28",
    "added": "2026-07-28"
  },
  {
    "id": "car",
    "name": {
      "en": "Toyota Crown Royal Saloon (2005)",
      "ja": "トヨタ クラウン ロイヤルサルーン 平成17年"
    },
    "price": 150000,
    "category": "vehicle",
    "status": "reserved",
    "images": [
      "images/car-1.jpg",
      "images/car-2.jpg",
      "images/car-3.jpg",
      "images/car-4.jpg",
      "images/car-5.jpg",
      "images/car-6.jpg"
    ],
    "note": {
      "en": "3.0 V6 (3GR-FSE, 256 ps), rear-wheel drive, automatic. 156,432 km. Shaken valid until 2028/04/26 and all taxes paid. A set of four winter tyres is included at no extra cost. Beige leather, wood trim, factory navigation. The passenger-side dashboard trim is cracked and the driver's seat is worn — both are in the photos. Price and handover date are negotiable, so please just ask.",
      "ja": "3.0L V6（3GR-FSE、256馬力）、FR、オートマ。走行156,432km。車検は令和10年4月26日まで（残り約1年9か月）有効ですので、次の車検費用はかかりません。税金もすべて納めています。スタッドレスタイヤ4本も無料でお付けします。ベージュの本革シート、木目調パネル、純正ナビ。助手席側のダッシュボードにひび割れ、運転席シートに擦れがあります（写真をご覧ください）。価格・お渡し日はご相談に応じますので、お気軽にお問い合わせください。"
    },
    "link": "https://gazoo.com/catalog/maker/TOYOTA/CROWN/200312/10030036/",
    "linkLabel": {
      "en": "Toyota catalogue (GAZOO)",
      "ja": "トヨタ カタログ（GAZOO）"
    },
    "available": "2026-08-28",
    "added": "2026-07-29"
  },
  {
    "id": "playground",
    "name": {
      "en": "Kids' climbing frame with slide",
      "ja": "すべり台つき ジャングルジム"
    },
    "price": 0,
    "category": "kids",
    "status": "reserved",
    "images": [
      "images/playground-1.jpg",
      "images/playground-2.jpg"
    ],
    "note": {
      "en": "Really good fun to climb on — slide, climbing wall, steps and a basketball hoop. It folds flat for transport, as in the second photo. It has been standing outside, so it needs a wash. Free to a good home. If you need it delivered we can do that for 1,000 yen.",
      "ja": "登って遊ぶのがとても楽しい遊具です。すべり台、クライミングウォール、ステップ、バスケットゴールつき。2枚目の写真のように折りたたんで運べます。屋外に置いていたので、洗っていただく必要があります。無料でお譲りします。配送をご希望の場合は1,000円で承ります。"
    },
    "added": "2026-07-29"
  },
  {
    "id": "storage-baskets",
    "name": {
      "en": "Plastic storage baskets and boxes — lots of them",
      "ja": "プラスチックの収納ケース・カゴ たくさんあります"
    },
    "price": 0,
    "category": "kitchen",
    "status": "available",
    "images": [
      "images/storage-baskets-1.jpg",
      "images/storage-baskets-2.jpg"
    ],
    "note": {
      "en": "We have many different storage baskets and boxes in all sorts of sizes and shapes — the one in the photos is just an example. Please have a look and take whatever is useful to you. All free.",
      "ja": "収納ケースやカゴがたくさんあります。サイズも形もいろいろで、写真はその一例です。ぜひご覧いただき、使えそうなものをお持ちください。すべて無料です。"
    },
    "added": "2026-07-30"
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
    "available": "2026-08-25",
    "added": "2026-07-30"
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
    "available": "2026-08-25",
    "added": "2026-07-30"
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
    },
    "added": "2026-07-30"
  },
  {
    "id": "water-pot",
    "name": {
      "en": "Electric hot water pot — Zojirushi CD-WY30, 3 L",
      "ja": "マイコン沸とう電動ポット 象印 CD-WY30 3.0L"
    },
    "price": 1200,
    "category": "kitchen",
    "status": "reserved",
    "images": [
      "images/water-pot-1.jpg",
      "images/water-pot-2.jpg"
    ],
    "note": {
      "en": "3 litres. Keeps the water at 98, 90 or 70 degrees, has a slow cafe-drip pour for coffee, and a 7-hour timer. Bought new about three years ago and comes with the manual.",
      "ja": "容量3.0L。保温は98℃・90℃・70℃の3段階、コーヒー用のドリップ給湯、7時間タイマーつき。3年ほど前に新品で購入しました。取扱説明書もお付けします。"
    },
    "link": "https://www.zojirushi.co.jp/syohin/electronic-pot/cdwy/",
    "added": "2026-07-30"
  },
  {
    "id": "shelf-stickers",
    "name": {
      "en": "Toy shelf with bookcase — IRIS Ohyama (has stickers)",
      "ja": "トイハウスラック アイリスオーヤマ（シールあり）"
    },
    "price": 1500,
    "category": "kids",
    "status": "available",
    "images": [
      "images/shelf-stickers-1.jpg",
      "images/shelf-stickers-2.jpg",
      "images/shelf-stickers-3.jpg"
    ],
    "note": {
      "en": "IRIS Ohyama HTHR-34, 88 x 34.7 x 79.8 cm. Four pastel bins for toys, open shelves for books, and a flat top. Our son stuck an elephant and a giraffe on the side panel — we tried to peel them off, took a little of the surface with them, and put them back. You can remove them and cover the spot with a slightly bigger sticker. Everything else is in good order. The first photo is the maker's; the others are ours.",
      "ja": "アイリスオーヤマ HTHR-34、幅88×奥行34.7×高さ79.8cm。おもちゃ用のパステルカラーのボックス4個、絵本を並べられる棚、天板つき。息子が側面にゾウとキリンのシールを貼ってしまい、はがそうとしたら表面が少しめくれたので、そのまま貼り直しています。はがして少し大きめのシールを貼れば目立ちません。それ以外は問題なく使えます。1枚目はメーカーの写真、2枚目以降は実物です。"
    },
    "available": "2026-08-25",
    "link": {
      "en": "https://www.amazon.co.jp/-/en/dp/B07BYHGYTW",
      "ja": "https://www.amazon.co.jp/dp/B07BYHGYTW"
    },
    "added": "2026-07-30"
  },
  {
    "id": "shelf-new",
    "name": {
      "en": "Toy shelf with bookcase — IRIS Ohyama (almost new)",
      "ja": "トイハウスラック アイリスオーヤマ（ほぼ新品）"
    },
    "price": 2000,
    "category": "kids",
    "status": "available",
    "images": [
      "images/shelf-new-1.jpg",
      "images/shelf-new-2.jpg",
      "images/shelf-new-3.jpg"
    ],
    "note": {
      "en": "IRIS Ohyama HTHR-34, 88 x 34.7 x 79.8 cm. Four pastel bins for toys, open shelves for books, and a flat top. This one is in excellent condition, bought new in September 2025. The first photo is the maker's; the others are ours.",
      "ja": "アイリスオーヤマ HTHR-34、幅88×奥行34.7×高さ79.8cm。おもちゃ用のパステルカラーのボックス4個、絵本を並べられる棚、天板つき。こちらは2025年9月に新品で購入し、とてもきれいな状態です。1枚目はメーカーの写真、2枚目以降は実物です。"
    },
    "available": "2026-08-25",
    "link": {
      "en": "https://www.amazon.co.jp/-/en/dp/B07BYHGYTW",
      "ja": "https://www.amazon.co.jp/dp/B07BYHGYTW"
    },
    "added": "2026-07-30"
  },
  {
    "id": "kids-table-kitchen",
    "name": {
      "en": "Kids' table with bench and storage — flips into a play kitchen",
      "ja": "子ども用テーブル＋ベンチ（収納付き）／裏返すとキッチン"
    },
    "price": 500,
    "category": "kids",
    "status": "available",
    "images": [
      "images/kids-table-kitchen-1.jpg",
      "images/kids-table-kitchen-2.jpg",
      "images/kids-table-kitchen-3.jpg",
      "images/kids-table-kitchen-4.jpg",
      "images/kids-table-kitchen-5.jpg"
    ],
    "note": {
      "en": "A really convenient table with a bench and cupboards underneath for books and toys. Flip the top over and you have a kitchen — three hobs, a wooden tap and a metal sink. Solid wood, top 80 x 39 cm. It is a bit old and shows it, but our children love playing with it.",
      "ja": "とても便利なテーブルとベンチのセットで、下は絵本やおもちゃをしまえる収納になっています。天板を裏返すと、コンロ3つ・木の蛇口・シンクつきのキッチンに変わります。無垢材、天板は80×39cm。少し古くて傷もありますが、子どもたちは大好きでよく遊んでいます。"
    },
    "added": "2026-07-30"
  },
  {
    "id": "cushions",
    "name": {
      "en": "Cushions — four of them, one for a child's room",
      "ja": "クッション 4個（うち1個は子ども用）"
    },
    "price": 0,
    "category": "furniture",
    "status": "available",
    "images": [
      "images/cushions-1.jpg"
    ],
    "note": {
      "en": "Four cushions: two with the same leaf pattern in brown and in cream, one plain olive green, and one with a cow, sun and clouds for a child's room. Take one or take all four.",
      "ja": "クッション4個：ブラウンとアイボリーの葉柄（同じ柄の色違い）、オリーブグリーンの無地、そして牛と太陽の柄の子ども用。1つでも、4つまとめてでもどうぞ。"
    },
    "added": "2026-07-30"
  },
  {
    "id": "dressers-red",
    "name": {
      "en": "Plastic chest of drawers — two of them, red (55 x 40 x 77 cm)",
      "ja": "プラスチック引き出しケース 2台 レッド（幅55×奥行40×高さ77cm）"
    },
    "price": 0,
    "category": "furniture",
    "status": "reserved",
    "images": [
      "images/dressers-red-1.jpg"
    ],
    "note": {
      "en": "Two identical chests, four deep drawers each, with a wood-effect top. 55 x 40 x 77 cm. Take one or both.",
      "ja": "同じものが2台あります。深めの引き出し4段、天板は木目調。幅55×奥行40×高さ77cm。1台でも2台でもどうぞ。"
    },
    "added": "2026-07-30"
  },
  {
    "id": "curtains-blackout",
    "name": {
      "en": "Blackout curtains — set of 4, blue-grey, 190 cm drop",
      "ja": "遮光カーテン 4枚セット ブルーグレー 丈190cm"
    },
    "price": 0,
    "category": "furniture",
    "status": "reserved",
    "images": [
      "images/curtains-blackout-1.jpg"
    ],
    "note": {
      "en": "For our neighbours: the windows in this building are all the same, so these will fit yours straight away. They are good curtains, so please do take them. A set of four pieces for a bedroom: blackout drapes with net curtains, 190 cm drop. They make the room properly dark even in bright sunshine, which is a real help for getting small children to sleep.",
      "ja": "ご近所の皆さまへ：このマンションの窓はどこも同じですので、そのままお使いいただけます。しっかりしたカーテンですので、ぜひお持ちください。寝室用の4枚セットで、遮光カーテンとレースカーテン、丈は190cmです。日差しの強い日でもしっかり暗くなるので、お子さんのお昼寝にも助かります。"
    },
    "available": "2026-08-28",
    "added": "2026-07-30"
  },
  {
    "id": "curtains-sage",
    "name": {
      "en": "Curtains — set of 4, pale sage green, 190 cm drop",
      "ja": "カーテン 4枚セット ペールセージグリーン 丈190cm"
    },
    "price": 0,
    "category": "furniture",
    "status": "reserved",
    "images": [
      "images/curtains-sage-1.jpg"
    ],
    "note": {
      "en": "For our neighbours: the windows in this building are all the same, so these will fit yours straight away. They are good curtains, so please do take them. A set of four pieces, a soft sage green with net curtains, 190 cm drop. Lined.",
      "ja": "ご近所の皆さまへ：このマンションの窓はどこも同じですので、そのままお使いいただけます。しっかりしたカーテンですので、ぜひお持ちください。4枚セット、やわらかいセージグリーンとレースカーテン、丈は190cmです。裏地つき。"
    },
    "available": "2026-08-28",
    "added": "2026-07-30"
  },
  {
    "id": "curtains-kitchen",
    "name": {
      "en": "Kitchen curtains — leaf pattern, 110 cm drop",
      "ja": "キッチンのカーテン 葉柄 丈110cm"
    },
    "price": 0,
    "category": "furniture",
    "status": "reserved",
    "images": [
      "images/curtains-kitchen-1.jpg"
    ],
    "note": {
      "en": "For our neighbours: the windows in this building are all the same, so these will fit yours straight away. They are good curtains, so please do take them. For a kitchen window: cream with a leaf pattern in lilac, green and mustard, with a net curtain, 110 cm drop.",
      "ja": "ご近所の皆さまへ：このマンションの窓はどこも同じですので、そのままお使いいただけます。しっかりしたカーテンですので、ぜひお持ちください。キッチンの窓用。クリーム地に、ライラック・グリーン・マスタードの葉柄。レースカーテンつき、丈は110cmです。"
    },
    "available": "2026-08-28",
    "added": "2026-07-30"
  },
  {
    "id": "fridge",
    "name": {
      "en": "Fridge-freezer — SANYO, about 180 cm tall",
      "ja": "冷蔵庫 サンヨー 高さ約180cm"
    },
    "price": 0,
    "category": "appliances",
    "status": "reserved",
    "images": [
      "images/fridge-1.jpg"
    ],
    "note": {
      "en": "A big one, roughly 180 cm tall. Two freezer sections, and a fresh box for vegetables at the bottom. It is heavy, so please come with two people and a van. Ready from the morning of 08/28. The magnets in the photo are ours and will be taken off.",
      "ja": "大型で高さは約180cmです。冷凍室が2段、一番下は野菜用のフレッシュボックスになっています。重量がありますので、2名と車をご用意ください。08/28の午前中からお渡しできます。写真のマグネットは私たちのもので、お渡し前に外します。"
    },
    "available": "2026-08-28",
    "added": "2026-07-30"
  },
  {
    "id": "floor-chair",
    "name": {
      "en": "Floor chair — grey, reclines flat",
      "ja": "座椅子 グレー リクライニング"
    },
    "price": 1000,
    "category": "furniture",
    "status": "available",
    "images": [
      "images/floor-chair-1.jpg",
      "images/floor-chair-2.jpg",
      "images/floor-chair-3.jpg",
      "images/floor-chair-4.jpg"
    ],
    "note": {
      "en": "A grey fabric floor chair with a reclining back and a folding headrest. It goes from upright all the way down to flat, so it works as a floor lounger too. Comfortable for reading or watching TV.",
      "ja": "グレーの布張り座椅子。背もたれはリクライニング式で、ヘッドレストも折りたためます。起こした状態からフラットまで倒せるので、床でくつろぐマットとしても使えます。読書やテレビを見るのにちょうどいい椅子です。"
    },
    "available": "2026-08-25",
    "added": "2026-08-04"
  },
  {
    "id": "kitchen-table",
    "name": {
      "en": "Kitchen table with 2 chairs",
      "ja": "キッチンテーブル＋椅子2脚"
    },
    "price": 0,
    "category": "furniture",
    "status": "reserved",
    "images": [
      "images/kitchen-table-1.jpg",
      "images/kitchen-table-2.jpg"
    ],
    "note": {
      "en": "A small kitchen table with a white top and solid wood legs, plus two chairs with cushion pads. Free to a good home.",
      "ja": "白い天板と木の脚の小さめのキッチンテーブルと、クッション付きの椅子2脚です。無料でお譲りします。"
    },
    "added": "2026-08-04",
    "available": "2026-08-28"
  },
  {
    "id": "bed-frame",
    "name": {
      "en": "Double bed frame with futon — 210 x 140 cm",
      "ja": "ベッドフレーム＋敷き布団 ダブル 210×140cm"
    },
    "price": 0,
    "category": "furniture",
    "status": "available",
    "images": [
      "images/bed-frame-1.jpg"
    ],
    "note": {
      "en": "A white-wash slatted wooden frame on legs. Outer size 210 x 140 cm, which is a Japanese double. The futon on top comes with it. The futon is a bit old though, so you may want to get a fresh one for the frame.",
      "ja": "ホワイトウォッシュの脚付きすのこベッドフレームです。外寸210×140cm（ダブルサイズ）。上に敷いている布団もお付けします。ただ、布団は少し古くなっていますので、新しいものをご用意いただくのもよいかと思います。"
    },
    "available": "2026-08-25",
    "link": "https://www.nitori-net.jp/ec/product/5655590/",
    "linkLabel": {
      "en": "similar model at Nitori",
      "ja": "類似商品（ニトリ）"
    },
    "added": "2026-08-04"
  },
  {
    "id": "oven",
    "name": {
      "en": "Toaster oven — Twinbird TS-4118, with 2 baking trays",
      "ja": "オーブントースター ツインバード TS-4118（天板2枚つき）"
    },
    "price": 2500,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-04",
    "images": [
      "images/oven-1.jpg"
    ],
    "note": {
      "en": "A proper little oven, and one we've used a lot — fish, vegetables, cakes. It heats up very fast. Temperature dial up to 200C and a 60-minute timer. The manual comes with it, and two baking trays are included at no extra cost.",
      "ja": "しっかり使える小さなオーブンです。魚や野菜、ケーキもよく焼いていました。予熱がとても早いのが気に入っています。温度調節は200℃まで、60分タイマーつき。取扱説明書つき、天板2枚も追加料金なしでお付けします。"
    },
    "available": "2026-08-25",
    "link": "https://kakaku.com/item/K0000046607/"
  },
  {
    "id": "storage-drawers-small",
    "name": {
      "en": "Small plastic storage drawers — 3 drawers",
      "ja": "小物収納ケース — 引き出し3段"
    },
    "price": 0,
    "category": "furniture",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/storage-drawers-small-1.jpg"
    ],
    "note": {
      "en": "",
      "ja": ""
    }
  },
  {
    "id": "microwave",
    "name": {
      "en": "Microwave oven — Haier JM-V16A, 16 L",
      "ja": "オーブンレンジ ハイアール JM-V16A 16L"
    },
    "price": 0,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/microwave-1.jpg",
      "images/microwave-2.jpg",
      "images/microwave-3.jpg"
    ],
    "note": {
      "en": "16 L, 600 W microwave, oven up to 210°C, and a grill setting. Turntable, weight sensor and auto menus (reheat, defrost, toast, vegetables). 461 x 293 x 360 mm. Two honest notes: it needs a clean inside, and we only ever used it as a microwave — that works perfectly, but we never tried the oven or grill, so those are untested.",
      "ja": "16L、レンジ最大600W、オーブンは210℃まで、グリル機能つき。ターンテーブル式で、重量センサーとオートメニュー（あたため・解凍・トースト・ゆで野菜など）つき。外形寸法 幅461×高さ293×奥行360mm。正直にお伝えします：庫内に汚れがあり、お掃除が必要です。また、電子レンジとしてしか使ったことがなく、レンジ機能は問題なく使えますが、オーブンとグリルは未使用のため動作は未確認です。"
    },
    "available": "2026-08-27",
    "link": "https://kakaku.com/item/K0000278514/",
    "linkLabel": {
      "en": "specs on Kakaku.com",
      "ja": "スペック（価格.com）"
    }
  },
  {
    "id": "coffee-maker",
    "name": {
      "en": "Drip coffee maker — Panasonic NC-P26",
      "ja": "コーヒーメーカー パナソニック NC-P26"
    },
    "price": 2000,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/coffee-maker-1.jpg",
      "images/coffee-maker-2.jpg",
      "images/coffee-maker-3.jpg"
    ],
    "note": {
      "en": "Stainless thermal carafe, so the coffee keeps hot without sitting on a hotplate. Water gauge marked up to 6 cups (4 mugs), swing-out filter basket, and it switches itself off. Works well. The stainless has some scuffs from years of use — you can see them in the photos.",
      "ja": "ステンレス製の保温サーバーなので、ヒーターにのせておかなくても冷めにくいです。目盛りはコーヒーカップ6杯（マグカップ4杯）まで。バスケットは横に開くタイプで、自動電源オフつき。問題なく使えます。ステンレス部分には長年の使用による小キズがあります（写真をご覧ください）。"
    }
  },
  {
    "id": "rice-cooker",
    "name": {
      "en": "Rice cooker — BONABONA BK-R60, 3.5 cups",
      "ja": "炊飯器 ボナボナ BK-R60 3.5合"
    },
    "price": 1000,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/rice-cooker-1.jpg",
      "images/rice-cooker-2.jpg",
      "images/rice-cooker-3.jpg"
    ],
    "note": {
      "en": "CCP BONABONA BK-R60, a microcomputer cooker for 3.5 go — the right size for one person or a small household. Menus for white rice, quick cook, mixed grain and porridge, plus keep-warm and a delay timer. Works perfectly.",
      "ja": "CCP ボナボナ BK-R60。マイコン式の3.5合炊きで、一人暮らしや少人数のご家庭にちょうどいいサイズです。白米・白米高速・雑穀・おかゆのメニュー、保温と予約タイマーつき。問題なく使えます。"
    },
    "available": "2026-08-25"
  },
  {
    "id": "multipot",
    "name": {
      "en": "Electric multi-pot — KEVNHAUN KDS.8762, 1 L",
      "ja": "電気マルチポット ケヴンハウン KDS.8762 1L"
    },
    "price": 1500,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/multipot-1.jpg",
      "images/multipot-2.jpg"
    ],
    "note": {
      "en": "1.0 L, 600 W, with an OFF / LOW / HIGH dial. Comes with the glass lid, steamer plate, egg stand, the original box and the 16-recipe booklet. 250 x 185 x 225 mm with the steamer and lid fitted; 104 cm cord. Small enough to pack — we used to take it travelling. Works perfectly.",
      "ja": "1.0L、600W、OFF／LOW／HIGH の切替ダイヤルつき。ガラスふた・蒸し皿・エッグスタンド・元箱・16品のレシピブックが付属します。サイズは約250×185×225mm（蒸し皿・ガラスふた使用時、電源コードは含まず）、コードの長さ約104cm。小さいので旅行にも持って行っていました。問題なく使えます。"
    }
  },
  {
    "id": "strainers",
    "name": {
      "en": "Metal kitchen strainers — cone sieve, round sieve and a garlic press",
      "ja": "キッチンのステンレス小物 — 円すいこし器・丸ざる・ガーリックプレス"
    },
    "price": 0,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/strainers-1.jpg"
    ],
    "note": {
      "en": "Three stainless steel pieces, going together: a cone-shaped mesh strainer, a round mesh sieve with hooks to rest it on a bowl, and a garlic press.",
      "ja": "ステンレス製の3点まとめてお譲りします：円すい型のこし器、ボウルに掛けられるフックつきの丸いこし器（ざる）、ガーリックプレス。"
    }
  },
  {
    "id": "ride-on-audi",
    "name": {
      "en": "Kids' ride-on car — Audi TT S Roadster, battery powered",
      "ja": "電動乗用玩具 アウディ TT S ロードスター"
    },
    "price": 5000,
    "category": "kids",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/ride-on-audi-1.jpg",
      "images/ride-on-audi-2.jpg"
    ],
    "note": {
      "en": "Officially licensed Audi TT S Roadster in white, with a seat belt and a working steering wheel. The battery still holds a good charge. Much loved by our child — it is only going because we are leaving.",
      "ja": "正規ライセンスの電動乗用玩具、アウディ TT S ロードスター（ホワイト）。シートベルトとハンドルつき。バッテリーはまだしっかり充電できます。子どもがとても気に入って乗っていたものですが、帰国のためお譲りします。"
    }
  },
  {
    "id": "bins",
    "name": {
      "en": "Rubbish bins — several, different sizes",
      "ja": "ゴミ箱 — 大小いくつか"
    },
    "price": 0,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/bins-1.jpg",
      "images/bins-2.jpg",
      "images/bins-3.jpg",
      "images/bins-4.jpg"
    ],
    "note": {
      "en": "Take them all, or just the ones you need: a 30 L slide-lid bin (press the lid from the side and it opens wide), a pedal bin, a slim lidded bin, and a two-tier stacked bin labelled for cans, bottles and non-burnables.",
      "ja": "まとめてでも、必要なものだけでもどうぞ：30Lのスライドペール（横から押すと大きく開くタイプ）、ペダル式のゴミ箱、スリムなフタつきゴミ箱、カン・ビン・燃えないゴミに分別できる2段式ダストボックス。"
    }
  },
  {
    "id": "frying-pans",
    "name": {
      "en": "Frying pans — three of them, one with a glass lid",
      "ja": "フライパン3点 — ガラスふたつき1点"
    },
    "price": 0,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/frying-pans-1.jpg",
      "images/frying-pans-2.jpg",
      "images/frying-pans-3.jpg"
    ],
    "note": {
      "en": "All three going together: a deep cream-coloured pan with a wooden handle and a Tefal non-stick pan, both about 26 cm across, plus a small white ceramic-coated pan of about 18-20 cm that comes with its glass lid.",
      "ja": "3点まとめてお譲りします：木製ハンドルの深型フライパン（生成り色）と、ティファールのフッ素樹脂加工フライパン（どちらも約26cm）、それに約18〜20cmの白いセラミック加工の小さめフライパン（ガラスふたつき）。"
    }
  },
  {
    "id": "pot-ikea",
    "name": {
      "en": "Stainless steel pot with lid — IKEA 365+",
      "ja": "ステンレス鍋（ふたつき） IKEA 365+"
    },
    "price": 0,
    "category": "kitchen",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/pot-ikea-1.jpg",
      "images/pot-ikea-2.jpg"
    ],
    "note": {
      "en": "IKEA 365+ stainless steel pot with its lid and two side handles. Still perfectly usable — the base is scratched and discoloured from years of cooking, which you can see in the second photo.",
      "ja": "IKEA 365+ のステンレス鍋。ふたと両手ハンドルつきです。問題なく使えますが、底は長年の使用で傷や変色があります（2枚目の写真をご覧ください）。"
    }
  },
  {
    "id": "tricycle",
    "name": {
      "en": "Kids' tricycle with sun canopy and push handle",
      "ja": "三輪車 — 日よけほろ・押し手棒つき"
    },
    "price": 0,
    "category": "kids",
    "status": "available",
    "added": "2026-08-06",
    "images": [
      "images/tricycle-1.jpg"
    ],
    "note": {
      "en": "Tricycle with a folding sun canopy, a parent push handle, a basket at the back and another on the handlebars, and fold-away footrests. Well used and showing its age.",
      "ja": "折りたたみ式の日よけほろ、押し手棒、後ろのかごとハンドル前のかご、足のせステップつきの三輪車。だいぶ使い込んでおり、古さがあります。"
    }
  },
  {
    "id": "high-chair-aprica",
    "name": {
      "en": "Aprica high-low chair — reclines flat, with tray and wheels",
      "ja": "アップリカ ハイローベッド＆チェア — フラットになる、テーブル・キャスターつき"
    },
    "price": 0,
    "category": "kids",
    "status": "available",
    "added": "2026-08-08",
    "images": [
      "images/high-chair-aprica-1.jpg",
      "images/high-chair-aprica-2.jpg",
      "images/high-chair-aprica-3.jpg"
    ],
    "note": {
      "en": "The back reclines all the way flat, so it works as a bed for a small baby, and sits upright as a feeding chair with the removable tray. Height adjusts, safety harness, four castors with brakes. Used condition — there are some marks on the seat pad, which you can see in the photos.",
      "ja": "背もたれはフラットまで倒れるので、小さい赤ちゃんのベッドとしても使えます。起こせば、取り外せるテーブルつきの食事用チェアになります。高さ調節、安全ベルト、ストッパーつきキャスター4輪。使用感があり、シートに少し汚れがあります（写真をご覧ください）。"
    }
  },
  {
    "id": "ride-on-digger",
    "name": {
      "en": "Kids' ride-on digger — King Shovel",
      "ja": "乗用玩具 ショベルカー KING SHOVEL"
    },
    "price": 1000,
    "category": "kids",
    "status": "available",
    "added": "2026-08-08",
    "images": [
      "images/ride-on-digger-1.jpg"
    ],
    "note": {
      "en": "A sit-on digger the child pushes along with their feet. The shovel arm swings and the grab at the end opens and closes by hand. Steering wheel with a button panel.",
      "ja": "足で床をけって進む乗用のショベルカーです。アームは手で動かせて、先端のつかみも開閉します。ボタンつきのハンドル。"
    }
  },
  {
    "id": "beach-chairs",
    "name": {
      "en": "Folding low chairs — North Eagle, three of them",
      "ja": "折りたたみローチェア ノースイーグル 3脚"
    },
    "price": 1500,
    "category": "furniture",
    "status": "available",
    "added": "2026-08-08",
    "images": [
      "images/beach-chairs-1.jpg",
      "images/beach-chairs-2.jpg",
      "images/beach-chairs-3.jpg",
      "images/beach-chairs-4.jpg"
    ],
    "note": {
      "en": "Three low folding chairs with armrests — two tan, one olive green. Good for the beach, camping or a barbecue. They fold flat and stack together, as in the last two photos. Used, with some marks on the fabric. Going as a set of three.",
      "ja": "肘掛けつきの折りたたみローチェア3脚（ブラウン2脚・カーキ1脚）。海やキャンプ、バーベキューにどうぞ。写真のようにコンパクトに折りたためます。使用感があり、生地に多少の汚れがあります。3脚まとめてお譲りします。"
    }
  }
];
