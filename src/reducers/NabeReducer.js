import * as actionType from "../actions/types";

const hinabe = {
  id: 1,
  name: "hinabe",
  image:
    "https://www.marukome.co.jp/files/recipe/3445/5ab85c53-66b4-4cb2-a24c-a4b91b85f192.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ]
};

const paitan = {
  id: 1,
  name: "hinabe",
  image: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/708441.jpeg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ]
};

const motsunabe = {
  id: 1,
  name: "motsunabe",
  image: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/710648.jpeg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ]
};

const gekikara = {
  id: 1,
  name: "gekikara",
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
  ]
};

const INITIAL_STATE = { hinabe, paitan, motsunabe, gekikara };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
