import * as actionType from "../actions/types";

const INITIAL_STATE = {
  id: "fugafuga"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.HELLO_WORLD:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
