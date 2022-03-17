import React, {useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Separator} from '../components/Separator';
import {TokenListItem} from '../components/TokenListItem';
import {useTop} from '../hooks/useTop';

export const TopScreen = () => {
  const {isLoading, list, updateList} = useTop();
  const [refresh, setRefresh] = useState<boolean>(false);

  const onRefresh = () => {
    setRefresh(true);
    updateList();
    setRefresh(false);
  };

  return isLoading ? (
    <ActivityIndicator style={styles.loading} size={50} />
  ) : (
    <View>
      <Text style={styles.title}>Top Screen</Text>
      <FlatList
        data={list}
        ItemSeparatorComponent={Separator}
        renderItem={({item}): any => <TokenListItem data={item} />}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
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
