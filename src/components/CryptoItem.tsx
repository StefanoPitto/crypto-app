import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Coin} from '../interfaces/interfaces';

interface Props {
  data: Coin;
}

export const CryptoItem = ({data}: Props) => {
  const navigator = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigator.navigate('CryptoDetailScreen', data.item.id);
      }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: data.item.small}} />
        <Text style={styles.name}>{data.item.name}</Text>
        <Text>{data.item.price_btc.toFixed(6)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 20,
    width: 170,
  },
});
