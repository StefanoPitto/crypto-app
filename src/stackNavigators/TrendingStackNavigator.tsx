import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CryptoDetailScreen} from '../screens/CryptoDetailScreen';
import {TrendingScreen} from '../screens/TrendingScreen';

import {HomeScreen} from '../screens/HomeScreen';
import {TopScreen} from '../screens/TopScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  TrendingScreen: undefined;
  TopScreen: undefined;
  CryptoDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const TrendingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TrendingScreen" component={TrendingScreen} />
      <Stack.Screen name="CryptoDetailScreen" component={CryptoDetailScreen} />
      <Stack.Screen name="TopScreen" component={TopScreen} />
    </Stack.Navigator>
  );
};
