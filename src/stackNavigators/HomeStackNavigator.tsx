import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {CryptoDetailScreen} from '../screens/CryptoDetailScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  CryptoDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CryptoDetailScreen" component={CryptoDetailScreen} />
    </Stack.Navigator>
  );
};
