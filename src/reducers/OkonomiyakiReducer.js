const okonomiyaki = {
  id: 1,
  name: "お好み焼き",
  image: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/704422.jpeg",
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

const yasai = {
  id: 2,
  name: "野菜たっぷり",
  image: "http://www.nissui.co.jp/recipe/images/18/00893.jpg",
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

const cheeze = {
  id: 3,
  name: "チーズお好み焼き",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-SQ1MIkzxrl5Ks4VXp7hL1zqWASV68k-ptHvx_jZSgQSAx6D",
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

const hiroshima = {
  id: 4,
  name: "広島風お好み焼き",
  image: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/704432.jpeg",
  food: [
    { id: 1, name: "キャベツ", amount: 0.4 },
    { id: 2, name: "にんじん", amount: 0.4 },
    { id: 3, name: "豚肉", amount: 0.4 },
    { id: 4, name: "df", amount: 0.4 },
    { id: 5, name: "676e5", amount: 0.4 },
    { id: 6, name: "ddd", amount: 0.4 },
    { id: 7, name: "めん", amount: 0.4 }
  ],
  price: "600円/人"
};

const INITIAL_STATE = [okonomiyaki, yasai, cheeze, hiroshima];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
