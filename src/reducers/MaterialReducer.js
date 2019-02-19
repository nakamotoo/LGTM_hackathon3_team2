import * as actionType from "../actions/types";

const INITIAL_STATE = {
  food: [
    { id: 1, name: "キャベツ", value: 100 },
    { id: 2, name: "にんじん", value: 120 },
    { id: 3, name: "豚肉", value: 100 },
    { id: 4, name: "df", value: 100 },
    { id: 5, name: "676e5", value: 100 },
    { id: 6, name: "ddd", value: 100 },
    { id: 7, name: "めん", value: 100 }
  ],
  tool: [
    { id: 1, name: "鍋", value: 100 },
    { id: 2, name: "紙皿", value: 120 },
    { id: 3, name: "おわん", value: 100 },
    { id: 4, name: "コップ", value: 100 },
    { id: 5, name: "おたま", value: 100 }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
