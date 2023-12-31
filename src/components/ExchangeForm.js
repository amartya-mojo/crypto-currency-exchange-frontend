import React, { useState, useEffect } from "react";
import { fetchCryptoCurrencies } from "../utils/apiCalls";
import CurrencyDropdownMenu from "./CurrencyDropdownMenu";

const ExchangeForm = () => {
  const [cryptoCurrency, setCryptoCurrency] = useState("Bitcoin");
  const [exchangeAmount, setExchangeAmount] = useState(10);
  const [exchangeToCurrency, setExchangeToCurrency] = useState("USD");
  const [cryptoCurrencies, setCryptoCurrencies] = useState(null);

  const handleCryptoCurrencyChange = (e) => {
    setCryptoCurrency(e.target.value);
  };
  const handleExchangeAmountChange = (e) => {
    setExchangeAmount(e.target.value);
  };
  const handleExchangeToCurrencyChange = (e) => {
    setExchangeToCurrency(e.target.value);
  };

  const handleCryptoCurrencyFetch = async () => {
    let response = await fetchCryptoCurrencies();
    console.log(response);
    setCryptoCurrencies(response);
  };

  useEffect(() => {
    handleCryptoCurrencyFetch();
  }, []);

  return (
    <div className="max-w-1/2 min-w-1/2 w-[55%] flex items-center justify-center flex-col border-red-300 border-solid border bg-white p-[1em]">
      {cryptoCurrencies ? (
        <form className="max-w-full min-w-full w-full flex items-center justify-center flex-col p-[1em]">
          <div className="flex w-full justify-between items-center py-1">
            <CurrencyDropdownMenu
              incomingOptions={cryptoCurrencies}
              selectionLabel="Crypto"
              setDataInParent={setCryptoCurrency}
              width="1/2"
            />
            <label
              for="exchangeAmount"
              className="flex justify-center items-center w-1/3 border border-solid border-blue py-1"
            >
              Amount
              <input
                type="number"
                name="exchangeAmount"
                value={exchangeAmount}
                onChange={handleExchangeAmountChange}
                className="w-2/3 pl-5"
              />
            </label>
          </div>
          <div className="flex w-full justify-between items-center py-1 mx-15">
            <CurrencyDropdownMenu
              incomingOptions={cryptoCurrencies}
              selectionLabel="Non-crypto"
              setDataInParent={setCryptoCurrency}
              width="1/2"
              withLabel={false}
            />
            <h4 className="w-1/3">Result</h4>
          </div>
          <div className="mt-5 border border-solid border-black w-3/4 flex items-center justify-center rounded-md">
            <button className="">Hey</button>
          </div>
        </form>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default ExchangeForm;
