import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {CryptoItem} from '../components/CryptoItem';
import {Separator} from '../components/Separator';
import {useTrending} from '../hooks/useTrending';

export const TrendingScreen = () => {
  const {isLoading, trendingList} = useTrending();

  return isLoading ? (
    <ActivityIndicator style={styles.loading} size={60} />
  ) : (
    <View>
      <Text style={styles.title}>
        <Icon name="flame" size={40} />
        Trending
      </Text>
      <FlatList
        data={trendingList}
        keyExtractor={({item}): any => item.coin_id.toString()}
        ItemSeparatorComponent={Separator}
        renderItem={({item}: any) => <CryptoItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 10,
    color: '#1983b4',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1983b4',
  },
});
