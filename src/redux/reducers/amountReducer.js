import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function amountReducer(state = initialState.amount, action) {
  switch (action.type) {
    case actionTypes.SET_AMOUNT:
      return action.payload;

    default:
      return state;
  }
}
