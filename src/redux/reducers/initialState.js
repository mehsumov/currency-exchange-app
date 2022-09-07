const initialState = {
  rates: {},
  amount: "",
  currency: "",
  loader: true,
  currencies: [
    { currency: "AZN", desc: "Manat", img: "AZN_icon" },
    { currency: "GEL", desc: "Lari", img: "GEL_icon" },
    { currency: "USD", desc: "Dollar", img: "USD_icon" },
    { currency: "EUR", desc: "Euro", img: "EUR_icon" },
    { currency: "TRY", desc: "Lira", img: "TRY_icon" },
    { currency: "RUB", desc: "Rubl", img: "RUB_icon" },
  ],
  error:false
};

export default initialState;
