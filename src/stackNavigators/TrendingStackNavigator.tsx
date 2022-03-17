import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CryptoDetailScreen} from '../screens/CryptoDetailScreen';
import {TrendingScreen} from '../screens/TrendingScreen';
export type RootStackParams = {
  TrendingScreen: undefined;
  CryptoDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const TrendingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrendingScreen" component={TrendingScreen} />
      <Stack.Screen name="CryptoDetailScreen" component={CryptoDetailScreen} />
    </Stack.Navigator>
  );
};
