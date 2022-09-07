import React from "react";
import { useSelector } from "react-redux";
import Amount from "./Amount";
import Currencies from "./Currencies";
import "./CurrencyMain.css";
import Results from "./Results";

const CurrencyMain = () => {
  const state = useSelector((state) => state);
  console.log(state.errorReducer);

  return (
    <div className="currency-main">
      <Currencies />

      {state.loaderReducer ? (
        <p className="loading">Loading...</p>
      ) : state.errorReducer ? (
        <p className="error">Error</p>
      ) : (
        <>
          <Amount />
          <Results />
        </>
      )}
    </div>
  );
};

export default CurrencyMain;
