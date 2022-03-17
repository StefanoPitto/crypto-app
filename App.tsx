import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

import {TabsNavigator} from './src/tabs/TabsNavigator';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default App;
