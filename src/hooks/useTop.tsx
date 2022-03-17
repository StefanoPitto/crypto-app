import React, {useState, useEffect} from 'react';
import {CryptoApp} from '../API/CryptoApi';
import {Token} from '../interfaces/interfaces';

export const useTop = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [list, setList] = useState<Token[]>();

  const getTop = async () => {
    const response = await CryptoApp.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
    );
    setList(response.data);
  };

  useEffect(() => {
    getTop();
    setIsLoading(false);
  }, []);
  const updateList = () => {
    getTop();
  };
  return {isLoading, list, updateList};
};
