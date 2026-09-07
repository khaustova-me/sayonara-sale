/* Settings for the sale page. Safe to edit by hand — keep the quotes and commas. */
window.SALE_CONFIG = {
  title: { en: "Sayonara Sale", ja: "さよならセール" },

  // The opening line, printed a little larger than the rest.
  subtitle: {
    en: "Thank you, everyone. Every single thing on this page has found a new home, so the sale is finished. We're leaving Aizuwakamatsu far lighter than we thought possible, and that is entirely down to the people who wrote, came round, carried things down the stairs and helped us out.",
    ja: "みなさま、本当にありがとうございました。このページのすべての品に新しい家が見つかり、セールは終了しました。思っていたよりもずっと身軽に会津若松を出発できるのは、ご連絡くださった方、お越しくださった方、荷物を運ぶのを手伝ってくださった方々のおかげです。"
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
      en: "We're Victor, Veronica, Mark and Emilia. After ten wonderful years here we're moving to Europe for a year, and thanks to all of you everything we lived with now has somewhere to go.",
      ja: "ヴィクトル、ベロニカ、マーク、エミリアです。この街で過ごした素敵な10年を経て、1年間ヨーロッパへ移ります。みなさまのおかげで、暮らしをともにしたものすべてに次の行き先ができました。"
    },
    {
      en: "The list is still below, greyed out, so you can see where things went. If you're waiting on something you've claimed, message us on LINE and we'll sort out the handover.",
      ja: "品物のリストはグレー表示のまま下に残してあります。お約束済みの品をお待ちの方は、LINEでご連絡いただければ引き渡しのご相談をさせてください。"
    }
  ],

  currency: "¥",

  contact: {
    lineUrl: "https://line.me/ti/p/GUuO9juJ3H",
    // Shown under the button for anyone reading on a laptop, who can't tap it.
    qr: "images/line-qr.png",
    qrNote: { en: "or scan to add us on LINE", ja: "QRコードからも追加できます" },
    note: {
      en: "Everything is spoken for, so there's nothing left to claim — but if you've arranged an item with us, message us on LINE and we'll fix a time. Thank you again.",
      ja: "すべての品はお取り置き済みで、新たにお受けできるものはございません。お約束済みの方は、LINEでご連絡いただければお時間を決めさせてください。ありがとうございました。"
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
      en: "Get in touch and we'll agree a time for the handover. We can still deliver many of the bigger items if that helps.",
      ja: "ご連絡いただければ、引き渡しのお時間を決めさせてください。大きなものは、ご希望があればお届けもできます。"
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
    { id: "books",      emoji: "📚", label: { en: "Books",      ja: "本" } },
    { id: "clothes",    emoji: "👕", label: { en: "Clothes",    ja: "衣類" } },
    { id: "misc",       emoji: "📦", label: { en: "Other",      ja: "その他" } }
  ]
};
