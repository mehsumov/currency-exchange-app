import { combineReducers } from "redux";
import ratesReducer from "./ratesReducer";
import currencyReducer from "./currencyReducer";
import loaderReducer from "./loaderReducer";
import amountReducer from "./amountReducer";
import errorReducer from "./errorReducer";
const rootReducer = combineReducers({
  ratesReducer,
  currencyReducer,
  loaderReducer,
  amountReducer,
  errorReducer
});

export default rootReducer;
