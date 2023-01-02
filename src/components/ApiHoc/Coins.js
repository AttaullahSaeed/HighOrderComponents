import Hocfunction from "./Hocfunction";
const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
const CoinsComponent = Hocfunction(API_URL, "Coins");
export default CoinsComponent;
