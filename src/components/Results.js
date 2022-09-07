import React from "react";
import { useSelector } from "react-redux";

import initialState from "../redux/reducers/initialState";
import "./Results.css";

const Results = () => {
  const amount = useSelector((state) => state.amountReducer);
  const rates = useSelector((state) => state.ratesReducer);
  const currency = useSelector((state) => state.currencyReducer);
  const moneyList = initialState.currencies.filter(
    (item) => item.currency !== currency
  );
  return (
    <>
      {!amount ? (
        ""
      ) : (
        <ul className="results">
          {moneyList.map((money) => (
            <li key={money.currency} className="result">
              <div className="currency">
                <img src={require(`../img/${money.img}.svg`)} alt="" />
                <span className="currencyName">{money.desc}</span>
              </div>
              <span className="result-money">
                {amount === ""
                  ? ""
                  : (amount * rates[money.currency]).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Results;
