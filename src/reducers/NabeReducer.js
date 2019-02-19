import * as actionType from "../actions/types";

const hinabe = {
  id: 1,
  name: "hinabe",
  image:
    "https://www.syokuraku-web.com/wp-content/uploads/2017/10/20171020-hinaberamen01.jpg",
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
  image:
    "https://www.syokuraku-web.com/wp-content/uploads/2017/10/20171020-hinaberamen01.jpg",
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

const INITIAL_STATE = { hinabe, paitan };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
