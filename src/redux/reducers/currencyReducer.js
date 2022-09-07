import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function currencyReducer(state = initialState.currency, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      return action.payload;

    default:
      return state;
  }
}
