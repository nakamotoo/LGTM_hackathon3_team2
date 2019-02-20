import { combineReducers } from "redux";
import NabeReducer from "./NabeReducer";
import MaterialReducer from "./MaterialReducer";
import TakoyakiReducer from "./TakoyakiReducer";
import OkonomiyakiReducer from "./OkonomiyakiReducer";
import RecipeReducer from "./RecipeReducer";
export default combineReducers({
  nabe: NabeReducer,
  material: MaterialReducer,
  takoyaki: TakoyakiReducer,
  okonomiyaki: OkonomiyakiReducer,
  recipe: RecipeReducer
});
