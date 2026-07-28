/* Settings for the sale page. Safe to edit by hand — keep the quotes and commas. */
window.SALE_CONFIG = {
  title: { en: "Sayonara Sale", ja: "さよならセール" },

  // The opening line, printed a little larger than the rest.
  subtitle: {
    en: "We're Victor and Veronica. After ten years in Japan we're moving away for a year, so all the things we've lived with need to find a new home.",
    ja: "はじめまして、ヴィクトルとベロニカです。日本に10年間住んでいましたが、このたび1年間日本を離れることになりました。そのため、大切に使ってきたものたちに新しい家を探しています。"
  },

  // A photo of us, shown next to the introduction. Leave src as "" for none.
  // Add it with: python3 tools/add_item.py --about <photo>
  aboutPhoto: {
    src: "",
    alt: { en: "Victor and Veronica", ja: "ヴィクトルとベロニカ" },
    caption: { en: "", ja: "" }
  },

  // Extra paragraphs under the opening line. Add or remove freely.
  intro: [
    {
      en: "We'd much rather hand these things to someone who needs them than throw them away. Some are cheap, some are free — please have a look.",
      ja: "捨ててしまうのではなく、必要な方にお譲りしたいと思っています。お安くお売りするものも、無料でお譲りするものもあります。どうぞご覧ください。"
    },
    {
      en: "If something catches your eye, just message us. We may be able to deliver the bigger items, so do ask and we'll see what we can arrange.",
      ja: "気になるものがありましたら、お気軽にご連絡ください。大きなものは配送できる場合もありますので、ご相談ください。"
    }
  ],

  currency: "¥",

  contact: {
    // Paste your LINE link here: LINE app -> Settings -> Profile -> Share
    // It looks like https://line.me/ti/p/xxxxxxxxxx
    lineUrl: "",
    lineId: "",
    note: {
      en: "Message us on LINE and tell us which item you'd like. First come, first served. Ask about delivery for the bigger things.",
      ja: "LINEでご希望の品をお知らせください。先着順です。大きなものの配送についてもお気軽にご相談ください。"
    }
  },

  pickup: {
    // Flip to true once the date is decided.
    announced: false,
    date: { en: "", ja: "" },
    place: { en: "", ja: "" },
    tba: {
      en: "The main pickup day will be announced here — most likely around Obon, in mid-August.",
      ja: "引き取り日は決まり次第こちらでお知らせします。お盆（8月中旬）ごろの予定です。"
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
