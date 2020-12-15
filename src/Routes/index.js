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
import Remember from '~/pages/Remember';
import Chat from '~/pages/Chat';
import Home from '../pages/Home';
import PlayerScreen from '~/pages/PlayerScreen';

const Stack = createStackNavigator();

export default (props) => {
  console.log(props);
  return (
    <NavigationContainer>
      <Stack.Navigator

        initialRouteName={props.signed ? Navigation : Start}
        screenOptions={{
          headerShown: false,
        }}
      >
        {props.signed ?
          (
            <>
              <Stack.Screen name='Navigation' component={Navigation}/>
              <Stack.Screen name='Article' component={Article} />
              <Stack.Screen name='UpdateData' component={UpdateData} />
              <Stack.Screen name='UpdatePassword' component={UpdatePassword} />
              <Stack.Screen name='Chat' component={Chat}  options={{
                title: 'João de Deus',
                headerShown: true,
                headerStyle: {
                  backgroundColor: 'white'
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  color: '#FFDB58',
                },
                headerTintColor: '#FFDB58',
              }} />
              <Stack.Screen name='PlayerScreen' component={PlayerScreen}/>
            </>
          )
          : (
            <>
              <Stack.Screen name="Start" component={Start} />
              <Stack.Screen name='SignUp' component={SignUp} />
              <Stack.Screen name='SignIn' component={SignIn} />
              <Stack.Screen name='Remember' component={Remember} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
