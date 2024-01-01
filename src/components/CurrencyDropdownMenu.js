import React, { useState } from "react";

const CurrencyDropdownMenu = ({
  incomingOptions,
  setDataInParent,
  forNormal = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelectionChange = (e) => {
    const selectedCurrency = incomingOptions.filter(
      (option) => option.id === parseInt(e.target.value, 10)
    )[0];
    if (forNormal) {
      const currencyDataObject = {
        id: selectedCurrency.id,
        name: selectedCurrency.name,
        symbol: selectedCurrency.symbol,
        sign: selectedCurrency.sign,
      };
      setDataInParent(currencyDataObject);
    } else {
      const currencyDataObject = {
        id: selectedCurrency.id,
        name: selectedCurrency.name,
        symbol: selectedCurrency.symbol,
      };
      setDataInParent(currencyDataObject);
    }
    setSelectedValue(selectedCurrency.id);
  };

  return (
    <div
      className={`min-w-[30%] max-w-[30%] border border-solid border-blue py-1 hello`}
    >
      <select
        value={selectedValue}
        onChange={(e) => handleSelectionChange(e)}
        className={`w-full border-none focus:border-none active:border-none font-bold text-lg bg-white`}
      >
        {incomingOptions.map((incomingOption) => {
          return (
            <option
              value={incomingOption.id}
              key={incomingOption.id}
              className="w-full font-bold text-lg"
            >{`${incomingOption.symbol}`}</option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencyDropdownMenu;
