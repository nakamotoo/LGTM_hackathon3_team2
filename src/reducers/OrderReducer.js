import * as actionType from "../actions/types";

const INITIAL_STATE = {
  food: [],
  tool: [],
  people: 2,
  totalPrice: 0
};

let tmpPrice = 0;

const food = (state = {}, action) => {
  switch (action.type) {
    case actionType.SELECT_NABE:
      const food = action.material.food.filter(f => f.foodId == state.id);
      console.log(food[0]);
      console.log(action.peopleNum);
      tmpPrice += food[0].value * state.amount * action.peopleNum;
      console.log(tmpPrice);
      return { ...state, priceper1: food[0].value };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SELECT_NABE:
      tmpPrice = 0;
      return {
        ...state,
        food: action.nabeInfo.food.map(item => food(item, action)),
        people: action.peopleNum,
        totalPrice: tmpPrice
      };
    case actionType.INCREASE_PEOPLE_NUM:
      return { ...state, people: state.people + 1 };
    case actionType.DECREASE_PEOPLE_NUM:
      const num = state.people > 1 ? state.people - 1 : state.people;
      return { ...state, people: num };
    default:
      return state;
  }
};
