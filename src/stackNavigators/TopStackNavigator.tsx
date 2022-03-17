import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CryptoDetailScreen} from '../screens/CryptoDetailScreen';
import {TopScreen} from '../screens/TopScreen';

export type RootStackParams = {
  TopScreen: undefined;
  CryptoDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const TopStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TopScreen" component={TopScreen} />
      <Stack.Screen name="CryptoDetailScreen" component={CryptoDetailScreen} />
    </Stack.Navigator>
  );
};
