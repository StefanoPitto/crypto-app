import React, {useEffect, useState} from 'react';
import {CryptoApp} from '../API/CryptoApi';
import {Coin, TrendingResponse} from '../interfaces/interfaces';

export const useTrending = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [trendingList, setTrendingList] = useState<Coin[]>();
  const getTrendingCryptos = async () => {
    const response = await CryptoApp.get<TrendingResponse>('/search/trending');
    setTrendingList(response.data.coins);
  };

  useEffect(() => {
    getTrendingCryptos();
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    trendingList,
  };
};
