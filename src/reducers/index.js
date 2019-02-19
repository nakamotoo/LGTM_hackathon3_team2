import { combineReducers } from "redux";
import NabeReducer from "./NabeReducer";
import MaterialReducer from "./MaterialReducer";

export default combineReducers({
  nabe: NabeReducer,
  material: MaterialReducer
});
