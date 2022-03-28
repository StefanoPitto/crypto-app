// Generated by https://quicktype.io

export interface SimpleToken {
  id: string;
  symbol: string;
  name: string;
}
// Generated by https://quicktype.io

export interface TrendingResponse {
  coins: Coin[];
  exchanges: any[];
}

export interface Coin {
  item: Item;
}

export interface Item {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
}
// Generated by https://quicktype.io

export interface Token {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: Roi | null;
  last_updated: string;
}

export interface Roi {
  times: number;
  currency: Currency;
  percentage: number;
}

export enum Currency {
  Btc = 'btc',
  Eth = 'eth',
  Usd = 'usd',
}

export type RootStackParamsHome = {
  HomeScreen: undefined;
  CryptoDetailScreen: string;
};
export type RootStackParamsTop = {
  TopScreen: undefined;
  CryptoDetailScreen: string;
};

export type RootStackParamsTrending = {
  TrendingScreen: undefined;
  CryptoDetailScreen: string;
};
