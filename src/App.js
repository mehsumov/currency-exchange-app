import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CurrencyMain from "./components/CurrencyMain";
import { getRates } from "./redux/actions/ratesActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRates("AZN"));
  }, []);
  return (
    <div className="App">
      <CurrencyMain />
    </div>
  );
}

export default App;
