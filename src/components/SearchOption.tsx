import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SimpleToken} from '../interfaces/interfaces';

interface Props {
  data: SimpleToken;
}

export const SearchOption = ({data}: Props) => {
  const navigator = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigator.navigate('CryptoDetailScreen')}>
      <Text style={styles.info}>{data.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  info: {
    fontSize: 16,
  },
  container: {
    paddingVertical: 6,
    elevation: 6,
    shadowOpacity: 0.4,
  },
});
