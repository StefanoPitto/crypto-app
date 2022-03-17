import React, {useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {CryptoApp} from '../API/CryptoApi';
import {SimpleToken} from '../interfaces/interfaces';

export const useSearch = (input: string = '', time: number = 0) => {
  const [allCryptos, setAllCryptos] = useState<SimpleToken[]>();
  const [filteredArray, setFilteredArray] = useState<SimpleToken[]>();
  const [debouncedValue, setDebouncedValue] = useState<string>();

  const getFullList = async () => {
    const response = await CryptoApp.get('/coins/list');
    setAllCryptos(response.data);
  };

  const filterCryptos = () => {
    if (!debouncedValue || !allCryptos) return;
    setFilteredArray(
      allCryptos.filter(
        item =>
          item.name.includes(debouncedValue) ||
          item.symbol.includes(debouncedValue),
      ),
    );
  };

  useEffect(() => {
    getFullList();
  }, []);

  useEffect(() => filterCryptos, [debouncedValue]);

  useEffect(() => {
    if (input.length === 0 && filteredArray) setFilteredArray([]);
    if (!input || !allCryptos) return;
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
      return () => {
        clearTimeout(timeout);
      };
    }, time);
  }, [input]);
  return {
    filteredArray,
    debouncedValue,
  };
};
