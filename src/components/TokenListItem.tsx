import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Token} from '../interfaces/interfaces';

interface Props {
  data: Token;
}

export const TokenListItem = ({data}: Props) => {
  const navigator = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigator.navigate('CryptoDetailScreen', data.id)}>
      <View style={styles.container}>
        <Text style={styles.rank}>#{data.market_cap_rank}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: data.image}} />
        </View>
        <Text style={styles.name}>{data.symbol}</Text>
        <Text style={styles.price}>${data.current_price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  asd: {
    borderColor: 'red',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
  },
  rank: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  imageContainer: {
    marginLeft: 10,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'center',
  },
  name: {
    fontSize: 20,
    width: 60,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },
  price: {
    width: 70,
    color: '#000000',
    fontWeight: 'bold',
  },
});
