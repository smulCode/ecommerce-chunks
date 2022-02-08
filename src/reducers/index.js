import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import counterReducer from "./counterReducer";

const allReducers = combineReducers({
  productsReducer, counterReducer
});

export default allReducers;
