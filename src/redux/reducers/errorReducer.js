import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function errorReducer(state = initialState.error, action) {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.payload;
    default:
      return state;
  }
}
