import * as actionType from "../actions/types";

const hinabe = {
  id: 1,
  name: "hinabe",
  image:
    "https://www.syokuraku-web.com/wp-content/uploads/2017/10/20171020-hinaberamen01.jpg",
  food: [
    { id: 1, name: "キャベツ", value: 100 },
    { id: 2, name: "にんじん", value: 120 },
    { id: 3, name: "豚肉", value: 100 },
    { id: 4, name: "df", value: 100 },
    { id: 5, name: "676e5", value: 100 },
    { id: 6, name: "ddd", value: 100 },
    { id: 7, name: "めん", value: 100 }
  ]
};

const paitan = {
  id: 1,
  name: "hinabe",
  image:
    "https://www.syokuraku-web.com/wp-content/uploads/2017/10/20171020-hinaberamen01.jpg",
  food: [
    { id: 1, name: "キャベツ", value: 100 },
    { id: 2, name: "にんじん", value: 120 },
    { id: 3, name: "豚肉", value: 100 },
    { id: 4, name: "df", value: 100 },
    { id: 5, name: "676e5", value: 100 },
    { id: 6, name: "ddd", value: 100 },
    { id: 7, name: "めん", value: 100 }
  ]
};

const INITIAL_STATE = { hinabe, paitan };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
