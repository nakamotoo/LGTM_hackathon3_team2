import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import MaterialReducer from "./MaterialReducer";

export default combineReducers({
  test: TestReducer,
  material: MaterialReducer
});
