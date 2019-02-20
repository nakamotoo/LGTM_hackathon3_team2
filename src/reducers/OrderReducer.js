import * as actionType from "../actions/types";

const INITIAL_STATE = {
  food: [],
  tool: [],
  people: 2,
  totalPrice: 0
};

let tmpPrice = 0;

let restFoodPrice = 0;

const food = (state = {}, action) => {
  switch (action.type) {
    case actionType.SELECT_NABE:
      const food = action.material.food.filter(f => f.foodId == state.id);
      tmpPrice += food[0].value * Math.ceil(state.amount * action.peopleNum);
      return { ...state, priceper1: food[0].value, changeNum: 0 };
      break;
    case actionType.INCREASE_FOOD_NUM:
      if (action.id == state.id) {
        return { ...state, changeNum: state.changeNum + 1 };
        break;
      }
    case actionType.DECREASE_FOOD_NUM:
      console.log(state);
      if (action.id == state.id && state.changeNum >= 1) {
        return { ...state, changeNum: state.changeNum - 1 };
        break;
      }
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
    case actionType.INCREASE_FOOD_NUM:
      return {
        ...state,
        food: state.food.map(item => food(item, action))
      };
    case actionType.DECREASE_FOOD_NUM:
      return {
        ...state,
        food: state.food.map(item => food(item, action))
      };
    default:
      return state;
  }
};
