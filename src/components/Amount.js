import React, { useEffect, useRef, useState } from "react";
import "./Amount.css";
import SubmitImg from "../img/submit.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAmount } from "../redux/actions/ratesActions";
import initialState from "../redux/reducers/initialState";

const Amount = () => {
  const [money, setMoney] = useState("");
  const amount = useSelector((state) => state.amountReducer);
  const currency = useSelector((state) => state.currencyReducer);
  const rates = useSelector((state) => state.ratesReducer);
  const moneyList = initialState.currencies;
  const [currencyName, setCurrencyName] = useState("");

  const dispatch = useDispatch();
  const inputValue = useRef();

  const changeAmount = (e) => {
    e.preventDefault();
    dispatch(setAmount(money));
  };
  useEffect(() => {
    setMoney(amount);
  }, []);

  useEffect(() => {
    const cName = moneyList.find((money) => {
      return money.currency === currency;
    });
    setCurrencyName(cName);
  }, [currency]);
  return (
    <div className="amount">
      <div className="head">
        <span>Amount</span>
      </div>
      <form action="" onSubmit={changeAmount}>
        <div className="input-group mb-3">
          <input
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            ref={inputValue}
            type="number"
            className="form-control"
            placeholder="Amount money"
            min="1"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            <img src={SubmitImg} alt="" />
          </button>
        </div>
      </form>
      <div className="result">
        {!amount ? (
          ""
        ) : (
          <>
            <span className="result-amount">
              {(amount * rates[currency]).toFixed(2)}
            </span>
            <span>{currencyName.desc}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Amount;
