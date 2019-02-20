import { combineReducers } from "redux";
import NabeReducer from "./NabeReducer";
import MaterialReducer from "./MaterialReducer";
import OrderReducer from "./OrderReducer";

export default combineReducers({
  nabe: NabeReducer,
  material: MaterialReducer,
  order: OrderReducer
});
