import * as actionType from "../actions/types";

const hinabe = {
  nabeId: 1,
  name: "火鍋",
  image:
    "https://www.marukome.co.jp/files/recipe/3445/5ab85c53-66b4-4cb2-a24c-a4b91b85f192.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.25 },
    { id: 2, name: "にんじん", amount: 0.5 },
    { id: 3, name: "豚肉", amount: 0.5 },
    { id: 4, name: "ジャガイモ", amount: 0.5 },
    { id: 5, name: "豆板醤", amount: 0.01 },
    { id: 6, name: "えのき", amount: 0.5 },
    { id: 7, name: "ラーメン", amount: 0.5 },
    { id: 8, name: "豆腐", amount: 0.3 }
  ],
  price: "800円/人"
};

const paitan = {
  nabeId: 2,
  name: "鶏白湯",
  image: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/708441.jpeg",
  food: [
    { id: 1, name: "手羽元", amount: 2 },
    { id: 2, name: "にんじん", amount: 0.5 },
    { id: 3, name: "ネギ", amount: 0.5 },
    { id: 4, name: "しめじ", amount: 0.3 },
    { id: 5, name: "白菜(1/2カット)", amount: 0.4 },
    { id: 6, name: "豆腐", amount: 0.25 },
    { id: 7, name: "ラーメン", amount: 0.5 },
    { id: 8, name: "鳥白湯の素", amount: 0.125 }
  ],
  price: "600円/人"
};

const motsunabe = {
  nabeId: 3,
  name: "もつ鍋",
  image: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/710648.jpeg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.8 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 1.4 },
    { id: 4, name: "df", amount: 0.1 },
    { id: 5, name: "676e5", amount: 0.9 },
    { id: 6, name: "ddd", amount: 2.4 },
    { id: 7, name: "めん", amount: 0.3 }
  ],
  price: "800円/人"
};

const gekikara = {
  nabeId: 4,
  name: "激辛鍋",
  image:
    "https://trendy.nikkeibp.co.jp/article/pickup/20150219/1062785/thumb_400_07_px400.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.8 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 1.4 },
    { id: 4, name: "df", amount: 0.1 },
    { id: 5, name: "676e5", amount: 0.9 },
    { id: 6, name: "ddd", amount: 2.4 },
    { id: 7, name: "めん", amount: 0.3 }
  ],
  price: "700円/人"
};

const tonyu = {
  nabeId: 5,
  name: "豆乳鍋",
  image: "http://www.kikkoman.co.jp/homecook/search/recipe/img/00004124.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.8 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 1.4 },
    { id: 4, name: "df", amount: 0.1 },
    { id: 5, name: "676e5", amount: 0.9 },
    { id: 6, name: "ddd", amount: 2.4 },
    { id: 7, name: "めん", amount: 0.3 }
  ],
  price: "700円/人"
};

const kimuchi = {
  nabeId: 6,
  name: "キムチ",
  image:
    "https://obs.line-scdn.net/0hBhwKJ6u7HUdKMjEPmfdiED9vGygzUQdPIEoKfT9kF2k_XgpHIkgOeSR2GS8JXA1GLgYKcTIuMQIAcB1tMTwhdDo0GhEcQiMQHhIWYBhEQw9kBVp4ExFOIWsyQXZuBV0Rd1RadGwwQXVkR1sXcQZTJWYx",
  food: [
    { id: 1, name: "キャベツ", amount: 0.8 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 1.4 },
    { id: 4, name: "df", amount: 0.1 },
    { id: 5, name: "676e5", amount: 0.9 },
    { id: 6, name: "ddd", amount: 2.4 },
    { id: 7, name: "めん", amount: 0.3 }
  ],
  price: "600円/人"
};

const INITIAL_STATE = [hinabe, paitan, motsunabe, gekikara, tonyu, kimuchi];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
