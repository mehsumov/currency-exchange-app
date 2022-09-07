import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function ratesReducer(state = initialState.rates, action) {
  switch (action.type) {
    case actionTypes.GET_RATES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
