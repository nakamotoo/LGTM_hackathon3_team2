import * as actionType from "../actions/types";

const INITIAL_STATE = {
  food: [
    { foodId: 1, name: "キャベツ", value: 100 },
    { foodId: 2, name: "にんじん", value: 120 },
    { foodId: 3, name: "豚肉", value: 100 },
    { foodId: 4, name: "df", value: 100 },
    { foodId: 5, name: "676e5", value: 100 },
    { foodId: 6, name: "ddd", value: 100 },
    { foodId: 7, name: "めん", value: 100 }
  ],
  tool: [
    { toolId: 1, name: "鍋", value: 100 },
    { toolId: 2, name: "紙皿", value: 120 },
    { toolId: 3, name: "おわん", value: 100 },
    { toolId: 4, name: "コップ", value: 100 },
    { toolId: 5, name: "おたま", value: 100 }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
