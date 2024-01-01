import React, { useState, useEffect } from "react";
import {
  fetchCurrenciesData,
  fetchConvertedCurrencyAmount,
} from "../utils/apiCalls";
import CurrencyDropdownMenu from "./CurrencyDropdownMenu";
import { AiOutlineSwap } from "react-icons/ai";
import ShimmerCard from "./ShimmerCard";

const ExchangeForm = () => {
  const [cryptoCurrency, setCryptoCurrency] = useState({
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
  }); // id for BTC
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [exchangeToCurrency, setExchangeToCurrency] = useState({
    id: 2781,
    name: "United States Dollar",
    symbol: "USD",
    sign: "$",
  }); // id for USD
  const [currencyData, setCurrencyData] = useState({
    cryptoCurrencyList: null,
    normalCurrencyList: null,
  });
  const [isSwapped, setIsSwapped] = useState(false);

  const handleExchangeAmountChange = (e) => {
    setExchangeAmount(e.target.value);
  };

  const handleCurrencyDataFetch = async () => {
    try {
      const [cryptoCurrencies, normalCurrencies] = await Promise.all([
        fetchCurrenciesData("getCryptoCurrencies"),
        fetchCurrenciesData("getNormalCurrencies"),
      ]);
      setCurrencyData({
        cryptoCurrencyList: cryptoCurrencies,
        normalCurrencyList: normalCurrencies,
      });
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const handleCurrencyConvert = async (e) => {
    e.preventDefault();
    const fromCurrency = isSwapped ? exchangeToCurrency.id : cryptoCurrency.id;
    const toCurrency = isSwapped ? cryptoCurrency.id : exchangeToCurrency.id;
    if (exchangeAmount > 0) {
      console.log(isSwapped, {
        convertFrom: fromCurrency,
        convertTo: toCurrency,
        amount: exchangeAmount,
      });
      let response = await fetchConvertedCurrencyAmount({
        // If the user swapped then we need to switch the conversion
        convertFrom: fromCurrency,
        convertTo: toCurrency,
        amount: exchangeAmount,
      });
      console.log(response.quote[toCurrency].price);
      setExchangeAmount(response.quote[toCurrency].price.toFixed(2));
    } else {
      alert("Enter an amount greater than zero");
    }
  };

  useEffect(() => {
    handleCurrencyDataFetch();
  }, []);

  return (
    <div className="max-w-1/2 min-w-[50%] flex items-center justify-center flex-col  bg-white p-[1em] rounded-md shadow-lg">
      {currencyData.cryptoCurrencyList && currencyData.normalCurrencyList ? (
        <form className="max-w-full min-w-full w-full flex items-center justify-center flex-col p-[1em]">
          <div className="flex min-w-full justify-between items-center py-1 ">
            <div className="flex min-w-[100%] justify-between items-center py-1">
              <CurrencyDropdownMenu
                incomingOptions={currencyData.cryptoCurrencyList}
                setDataInParent={setCryptoCurrency}
              />
              <div
                className="w-6 h-6 bg-[#f0d78c] rounded-full cursor-pointer flex items-center justify-center"
                onClick={() => setIsSwapped(!isSwapped)}
              >
                <AiOutlineSwap />
              </div>

              <CurrencyDropdownMenu
                incomingOptions={currencyData.normalCurrencyList}
                setDataInParent={setExchangeToCurrency}
                forNormal={true}
              />
            </div>
          </div>
          <div className="flex w-full items-end justify-end py-1 ">
            <label
              htmlFor="exchangeAmount"
              className="flex items-center w-full py-1 px-1 font-bold text-lg border-b-2 border-solid border-blue"
            >
              {isSwapped ? cryptoCurrency.symbol : exchangeToCurrency.sign}
              <input
                type="number"
                name="exchangeAmount"
                value={exchangeAmount}
                onChange={handleExchangeAmountChange}
                className="appearance-none w-full pl-1"
                placeholder="Enter exchange amount"
              />
            </label>
          </div>
          <div
            className="mt-5 border border-solid border-slate-300 w-3/4 flex items-center justify-center rounded-md cursor-pointer bg-[#f0d78c] px-2 py-2"
            onClick={(e) => handleCurrencyConvert(e)}
          >
            <p className="font-bold text-lg">Convert</p>
          </div>
        </form>
      ) : (
        <div className="max-w-1/2 min-w-[50%] flex items-center justify-center flex-col bg-white">
          <ShimmerCard />
        </div>
      )}
    </div>
  );
};

export default ExchangeForm;
