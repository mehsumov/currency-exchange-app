import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as ratesActions from "../redux/actions/ratesActions";
import changeArrow from "../img/changeArrow.svg";
import "./Currencies.css";
import initialState from "../redux/reducers/initialState";

const Currencies = () => {
  const moneyList = initialState.currencies;
  const dispatch = useDispatch();
  const baseCur = useRef();
  const curValue = useRef();
  useEffect(() => {
    dispatch(ratesActions.setCurrency(curValue.current.value));
  }, []);
  const setBase = (cur) => {
    dispatch(ratesActions.getRates(cur));
  };
  const setCurrTo = (cur) => {
    dispatch(ratesActions.setCurrency(cur));
  };

  return (
    <div className="currencies">
      <select
        onChange={(e) => setBase(e.target.value)}
        className="currencyFrom form-select"
        ref={baseCur}
      >
        {moneyList.map((money) => (
          <option key={money.currency} value={money.currency}>
            {money.desc}
          </option>
        ))}
      </select>
      <button className="change">
        <img src={changeArrow} alt="" />
      </button>
      <select
        ref={curValue}
        onChange={(e) => setCurrTo(e.target.value)}
        className="currencyTo form-select"
      >
        {moneyList.map((money) => (
          <option key={money.currency} value={money.currency}>
            {money.desc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currencies;
