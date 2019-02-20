const roast = {
  id: 1,
  name: "ローストビーフ",
  image: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/703987.jpeg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "500円/人"
};

const yasai = {
  id: 2,
  name: "カルパッチョ",
  image:
    "https://www.aco-mom.com/images/izakaya/2015/20151103-izakaya-burinokarupacho-100b.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "350円/人"
};

const cheeze = {
  id: 3,
  name: "カプレーゼ",
  image:
    "https://cont-daidokolog.pal-system.co.jp/system/recipe/3040/img/thumbnail/sp_detail_main_COP12_00_558.jpg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "200円/人"
};

const hiroshima = {
  id: 4,
  name: "ローストチキン",
  image:
    "https://image.walkerplus.com/lettuce/img/dish/1/S20171225049001A_000.jpg?x=450",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "650円/人"
};

const INITIAL_STATE = [roast, yasai, cheeze, hiroshima];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
