import axios from "axios";

const BASE_URL = "https://curr-crypto-exchange.onrender.com/api";

export const fetchCurrenciesData = async (endpoint) => {
  try {
    let response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchConvertedCurrencyAmount = async ({
  convertFrom,
  convertTo,
  amount,
}) => {
  try {
    let response = await axios.post(`${BASE_URL}/convertCurrencyAmount`, {
      convertFrom: convertFrom,
      convertTo: convertTo,
      amount: amount,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
