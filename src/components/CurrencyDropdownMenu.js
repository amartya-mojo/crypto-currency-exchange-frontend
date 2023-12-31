import React, { useState } from "react";

const CurrencyDropdownMenu = ({
  incomingOptions,
  selectionLabel,
  setDataInParent,
  width,
  withLabel = true,
}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelectionChange = (e) => {
    console.log("changes", e.target.value);
    setSelectedValue(e.target.value);
    setDataInParent(e.target.value);
  };

  const handleOptionClick = (option) => {
    console.log(option);
  };
  return (
    <div className={`w-${width} border border-solid border-blue py-1 `}>
      {withLabel ? (
        <label className="flex items-center justify-center w-full ">
          {selectionLabel}
          <select
            value={selectedValue}
            onChange={(e) => handleSelectionChange(e)}
            className="w-3/4 ml-5"
          >
            {incomingOptions.map((incomingOption) => {
              return (
                <option
                  value={incomingOption.id}
                  key={incomingOption.id}
                  className="w-full"
                >{`${incomingOption.name} (${incomingOption.symbol})`}</option>
              );
            })}
          </select>
        </label>
      ) : (
        <select
          value={selectedValue}
          onChange={(e) => handleSelectionChange(e)}
          className={`w-full`}
        >
          {incomingOptions.map((incomingOption) => {
            return (
              <option
                value={incomingOption.id}
                key={incomingOption.id}
                className="w-full"
              >{`${incomingOption.name} (${incomingOption.symbol})`}</option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default CurrencyDropdownMenu;
