import * as actionTypes from "./actionTypes";

export function setError(val) {
  return {
    type: actionTypes.SET_ERROR,
    payload: val,
  };
}
