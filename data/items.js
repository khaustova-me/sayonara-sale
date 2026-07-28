/* ============================================================
   THE LIST. This is the only file that changes day to day.

   price: a number in yen, or 0 for free, or null for "ask me"
   status: "available" | "reserved" | "sold"
   images: [] is fine — the card shows the category emoji instead

   Written by tools/add_item.py, but hand-editing is fine too.
   ============================================================ */
window.SALE_ITEMS = [
  {
    "id": "example-washing-machine",
    "name": {
      "en": "Washing machine — Panasonic 7kg",
      "ja": "洗濯機 パナソニック 7kg"
    },
    "price": 8000,
    "category": "appliances",
    "status": "available",
    "images": [],
    "note": {
      "en": "Example item — delete me. Works perfectly, bought in 2023.",
      "ja": "サンプルです。削除してください。2023年購入、動作良好です。"
    }
  },
  {
    "id": "example-kids-books",
    "name": {
      "en": "Box of kids' books",
      "ja": "子ども用の本 ひと箱"
    },
    "price": 0,
    "category": "kids",
    "status": "available",
    "images": [],
    "note": {
      "en": "Example item — delete me. Please just take them.",
      "ja": "サンプルです。削除してください。どうぞお持ちください。"
    }
  },
  {
    "id": "example-microwave",
    "name": {
      "en": "Microwave oven",
      "ja": "電子レンジ"
    },
    "price": 3000,
    "category": "kitchen",
    "status": "sold",
    "images": [],
    "note": {
      "en": "Example item — delete me. This one shows how sold items look.",
      "ja": "サンプルです。削除してください。売却済みの表示例です。"
    }
  }
];
