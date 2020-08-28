import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './Navigation';
import Article from '~/pages/Article';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Navigation' component={Navigation} />
        <Stack.Screen name='Article' component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
