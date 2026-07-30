/* Settings for the sale page. Safe to edit by hand — keep the quotes and commas. */
window.SALE_CONFIG = {
  title: { en: "Sayonara Sale", ja: "さよならセール" },

  // The opening line, printed a little larger than the rest.
  subtitle: {
    en: "We're Victor, Veronica, Mark and Emilia. After ten wonderful years in Aizuwakamatsu we're moving to Europe for a year, so all the things we've lived with need to find a new home.",
    ja: "はじめまして、ヴィクトル、ベロニカ、マーク、エミリアです。会津若松で過ごした素敵な10年を経て、このたび1年間ヨーロッパへ移ることになりました。そのため、大切に使ってきたものたちに新しい家を探しています。"
  },

  // A photo of us, shown next to the introduction. Leave src as "" for none.
  // Add it with: python3 tools/add_item.py --about <photo>
  aboutPhoto: {
    src: "images/about-us.jpg",
    alt: {
      en: "Victor, Veronica, Mark and Emilia under the cherry blossoms",
      ja: "桜の下のヴィクトル、ベロニカ、マーク、エミリア"
    },
    caption: { en: "", ja: "" }
  },

  // Extra paragraphs under the opening line. Add or remove freely.
  intro: [
    {
      en: "If something catches your eye, just message us. We may be able to deliver the bigger items, so do ask and we'll see what we can arrange.",
      ja: "気になるものがありましたら、お気軽にご連絡ください。大きなものは配送できる場合もありますので、ご相談ください。"
    }
  ],

  currency: "¥",

  contact: {
    lineUrl: "https://line.me/ti/p/GUuO9juJ3H",
    // Shown under the button for anyone reading on a laptop, who can't tap it.
    qr: "images/line-qr.png",
    qrNote: { en: "or scan to add us on LINE", ja: "QRコードからも追加できます" },
    note: {
      en: "Message us on LINE and tell us which item you'd like. First come, first served. Ask about delivery for the bigger things.",
      ja: "LINEでご希望の品をお知らせください。先着順です。大きなものの配送についてもお気軽にご相談ください。"
    }
  },

  pickup: {
    // Where the sale is. Shown first, with or without a date — buyers need
    // this before anything else. Street address stays off the page.
    area: { en: "Aizuwakamatsu, Fukushima", ja: "福島県会津若松市" },

    // Flip to true once the date is decided.
    announced: false,
    date: { en: "", ja: "" },
    place: { en: "", ja: "" },
    tba: {
      en: "Please get in touch — collection during Obon is possible, and many things can be delivered to you if you need.",
      ja: "お気軽にご連絡ください。お盆の期間中の引き取りも可能です。多くの品は、ご希望があればお届けもできます。"
    },
    // Exact apartment number is shared over LINE, not published here.
    addressNote: {
      en: "We'll send the exact address over LINE once we've agreed on a time.",
      ja: "詳しい住所は、お時間が決まりましたらLINEでお送りします。"
    }
  },

  categories: [
    { id: "vehicle",    emoji: "🚗", label: { en: "Car",        ja: "車" } },
    { id: "appliances", emoji: "🔌", label: { en: "Appliances", ja: "家電" } },
    { id: "kitchen",    emoji: "🍳", label: { en: "Kitchen",    ja: "キッチン" } },
    { id: "furniture",  emoji: "🪑", label: { en: "Furniture",  ja: "家具" } },
    { id: "kids",       emoji: "🧸", label: { en: "Kids",       ja: "子ども用品" } },
    { id: "clothes",    emoji: "👕", label: { en: "Clothes",    ja: "衣類" } },
    { id: "misc",       emoji: "📦", label: { en: "Other",      ja: "その他" } }
  ]
};
