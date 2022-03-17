import axios from 'axios';

export const CryptoApp = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});
