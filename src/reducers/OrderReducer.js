import * as actionType from "../actions/types";

const INITIAL_STATE = {
  nabe: {},
  people: 2,
  price: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
