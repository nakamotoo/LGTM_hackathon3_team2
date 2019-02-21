const takoyaki = {
  id: 1,
  name: "たこ焼き",
  image:
    "https://www.mag2.com/p/news/wp-content/uploads/2018/03/shutterstock_566735143-650x401.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "380円/人"
};

const mentai = {
  id: 2,
  name: "明太子たこ焼き",
  image:
    "https://blog-001.west.edge.storage-yahoo.jp/res/blog-68-65/hjbby485/folder/1587539/87/63564087/img_4?1457075795",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "450円/人"
};

const cheeze = {
  id: 3,
  name: "チーズたこ焼き",
  image:
    "https://sinobuya-ueno.com/wp-content/uploads/2014/09/%E4%BA%BA%E6%B0%97%EF%BC%93-860x626.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "450円/人"
};

const kimuchi = {
  id: 4,
  name: "キムチたこ焼き",
  image:
    "https://trendy.nikkeibp.co.jp/article/pickup/20150219/1062785/thumb_400_07_px400.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "400円/人"
};

const INITIAL_STATE = [takoyaki, mentai, cheeze, kimuchi];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
