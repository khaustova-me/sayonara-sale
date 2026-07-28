/* Settings for the sale page. Safe to edit by hand — keep the quotes and commas. */
window.SALE_CONFIG = {
  title: { en: "Sayonara Sale", ja: "さよならセール" },
  subtitle: {
    en: "We are moving away from Japan, so everything has to find a new home. Some things are cheap, some are free.",
    ja: "日本を離れることになりました。家にあるものを全部お譲りします。安いものも、無料のものもあります。"
  },

  currency: "¥",

  contact: {
    // Paste your LINE link here: LINE app -> Settings -> Profile -> Share
    // It looks like https://line.me/ti/p/xxxxxxxxxx
    lineUrl: "",
    lineId: "",
    note: {
      en: "Message me on LINE and tell me which item you want. First come, first served.",
      ja: "LINEでご希望の品をお知らせください。先着順です。"
    }
  },

  pickup: {
    // Flip to true once the date is decided.
    announced: false,
    date: { en: "", ja: "" },
    place: { en: "", ja: "" },
    tba: {
      en: "The pickup day is not decided yet — it will appear here as soon as it is.",
      ja: "引き取り日はまだ未定です。決まり次第こちらでお知らせします。"
    },
    // Exact apartment number is shared over LINE, not published here.
    addressNote: {
      en: "The exact address is sent over LINE once we agree on a time.",
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
