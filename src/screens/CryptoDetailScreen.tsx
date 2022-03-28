import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';

interface Props
  extends NativeStackScreenProps<RootStackParams, 'DetailMovieScreen'> {}

export const CryptoDetailScreen = ({route}: Props) => {
  const id = route.params as string;

  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
};
