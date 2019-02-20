import * as actionType from "../actions/types";

const INITIAL_STATE = {
  food: [],
  tool: [],
  people: 2,
  price: 0
};

const food = (state = {}, action) => {
  switch (action.type) {
    case actionType.SELECT_NABE:
      const food = action.material.food.filter(f => f.foodId == state.id);
      return { ...state, priceper1: food[0].value };
    default:
      return state;
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SELECT_NABE:
      return {
        ...state,
        food: action.nabeInfo.food.map(item => food(item, action)),
        people: action.peopleNum
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
