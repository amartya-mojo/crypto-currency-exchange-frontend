import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:4500/api";

export const fetchCryptoCurrencies = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/getCryptoCurrencies`);
    return response.data.data;
  } catch (e) {
    console.error(e);
  }
};
