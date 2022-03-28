import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {CryptoDetailScreen} from '../screens/CryptoDetailScreen';
import {RootStackParamsHome} from '../interfaces/interfaces';

const Stack = createNativeStackNavigator<RootStackParamsHome>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CryptoDetailScreen" component={CryptoDetailScreen} />
    </Stack.Navigator>
  );
};
