import * as actionTypes from "./actionTypes";
import { setError } from "./errorActions";
import * as loaderActions from "./loaderActions";

export function getRatesSuccess(rates) {
  return {
    type: actionTypes.GET_RATES_SUCCESS,
    payload: rates,
  };
}

export function setBase(currency) {
  return {
    type: actionTypes.SET_BASE,
    payload: currency,
  };
}

export function setCurrency(currency) {
  return {
    type: actionTypes.SET_CURRENCY,
    payload: currency,
  };
}
export function setAmount(amount) {
  return {
    type: actionTypes.SET_AMOUNT,
    payload: amount,
  };
}

export function getRates(base) {
  return function (dispatch) {
    dispatch(loaderActions.loader(true));
    dispatch(setError(false));
    let url = `https://api.apilayer.com/exchangerates_data/latest?symbols&base=${base}`;
    let myHeaders = new Headers();
    myHeaders.append("apikey", "G3nyjKpSpwNzVuVzE0KIAJxVVEG0jcj2");

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((result) => {
        dispatch(getRatesSuccess(result.rates));
        dispatch(loaderActions.loader(false));
        dispatch(setError(false));
      })
      .catch((error) => {
        dispatch(loaderActions.loader(false));

        dispatch(setError(true));
        console.log(error.message);
      });
  };
}
