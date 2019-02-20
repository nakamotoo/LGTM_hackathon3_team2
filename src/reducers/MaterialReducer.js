import * as actionType from "../actions/types";

const INITIAL_STATE = {
  food: [
    { foodId: 1, name: "手羽元", value: 60 },
    { foodId: 2, name: "にんじん", value: 40 },
    { foodId: 3, name: "ネギ", value: 80 },
    { foodId: 4, name: "しめじ", value: 70 },
    { foodId: 5, name: "白菜(1/2カット)", value: 100 },
    { foodId: 6, name: "豆腐", value: 80 },
    { foodId: 7, name: "ラーメン", value: 40 },
    { foodId: 8, name: "鳥白湯の素", value: 250 }
  ],
  tool: [
    { toolId: 1, name: "お茶", value: 100 },
    { toolId: 2, name: "紙平皿", value: 120 },
    { toolId: 3, name: "紙おわん", value: 150 },
    { toolId: 4, name: "紙コップ", value: 100 },
    { toolId: 5, name: "おたま", value: 100 },
    { toolId: 6, name: "鍋", value: 2000 }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
