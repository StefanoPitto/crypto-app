import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {SearchOption} from '../components/SearchOption';
import {Separator} from '../components/Separator';
import {useSearch} from '../hooks/useSearch';

export const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const {filteredArray, debouncedValue} = useSearch(searchInput);

  useEffect(
    () => console.log(filteredArray, filteredArray?.length),
    [filteredArray],
  );

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://e7.pngegg.com/pngimages/4/329/png-clipart-cryptocurrency-bitcoin-logo-blockchain-trade-bitcoin-trademark-logo.png',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>CryptoApp</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setSearchInput}
          value={searchInput}
          placeholder="Search..."
        />
        <Icon name="search" size={24} />
      </View>
      {filteredArray ? (
        <SafeAreaView>
          <View style={styles.listContainer}>
            <FlatList
              data={filteredArray}
              ItemSeparatorComponent={Separator}
              showsVerticalScrollIndicator={false}
              renderItem={({item}: any) => <SearchOption data={item} />}
            />
          </View>
        </SafeAreaView>
      ) : (
        <></>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#0065b8',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: '#00000016',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 24,
    width: 300,
  },
  inputStyle: {
    fontSize: 20,
    width: 140,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  listContainer: {
    height: 160,
    width: 300,
  },
  borders: {
    borderWidth: 1,
    borderColor: '#00000058',
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
