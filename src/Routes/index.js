import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './Navigation';
import Article from '~/pages/Article';
import UpdateData from '~/pages/UpdateData';
import UpdatePassword from '~/pages/UpdatePassword';
import Start from '~/pages/Start';
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='Navigation' component={Navigation} />
        <Stack.Screen name='Article' component={Article} />
        <Stack.Screen name='UpdateData' component={UpdateData} />
        <Stack.Screen name='UpdatePassword' component={UpdatePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
