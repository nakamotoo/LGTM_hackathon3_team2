import { combineReducers } from "redux";
import NabeReducer from "./NabeReducer";
import MaterialReducer from "./MaterialReducer";
import OrderReducer from "./OrderReducer";
import TakoyakiReducer from "./TakoyakiReducer";
import OkonomiyakiReducer from "./OkonomiyakiReducer";
import RecipeReducer from "./RecipeReducer";

export default combineReducers({
  nabe: NabeReducer,
  material: MaterialReducer,
  order: OrderReducer,
  takoyaki: TakoyakiReducer,
  okonomiyaki: OkonomiyakiReducer,
  recipe: RecipeReducer
});
