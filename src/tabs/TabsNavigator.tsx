import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import {HomeStackNavigator} from '../stackNavigators/HomeStackNavigator';
import {TrendingStackNavigator} from '../stackNavigators/TrendingStackNavigator';
import {TopStackNavigator} from '../stackNavigators/TopStackNavigator';
export type RootStackParams = {
  HomeStackNavigator: undefined;
  TrendingStackNavigator: undefined;
  TopStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<RootStackParams>();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.container}
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeStackNavigator':
              iconName = 'home';
              break;
            case 'TrendingStackNavigator':
              iconName = 'flame';
              break;
            case 'TopStackNavigator':
              iconName = 'trophy';
              break;
          }
          return <Icon name={iconName} size={30} />;
        },
        headerShown: false,
        tabBarStyle: styles.container,
      })}>
      <Tab.Screen
        name="HomeStackNavigator"
        options={{title: 'Home'}}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="TrendingStackNavigator"
        options={{title: 'Trending'}}
        component={TrendingStackNavigator}
      />
      <Tab.Screen
        name="TopStackNavigator"
        options={{title: 'Top'}}
        component={TopStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 4,
  },
});
