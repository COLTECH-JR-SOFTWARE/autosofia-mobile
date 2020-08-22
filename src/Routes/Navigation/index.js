import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import iconHome from '~/assets/iconeHome.png';
import iconMeditation from '~/assets/iconeMeditacao.png';
import iconRelaxation from '~/assets/iconeRelaxamento.png';
import iconLearn from '~/assets/iconeAprenda.png';
import iconProfile from '~/assets/iconePerfil.png';

import Home from '~/pages/Home';
import Learn from '~/pages/Learn';
import Profile from '~/pages/Profile';
import Meditation from '~/pages/Meditation';
import Relaxation from '~/pages/Relaxation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#ffdb58",
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
          position: 'absolute',
          padding: 10,
          left: 20,
          right: 20,
          bottom: 20,
          borderRadius: 70
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return <Image
              source={iconHome}
              style={{width: 30, height: 30, tintColor: color}}
            />;
          },
        }}
      />

      <Tab.Screen
        name="Meditation"
        component={Meditation}
        options={{
          tabBarLabel: 'Meditação',
          tabBarIcon: ({color}) => {
            return <Image
              source={iconMeditation}
              style={{width: 30, height: 30, tintColor: color}}
            />;
          },
        }}
      />

      <Tab.Screen
        name="Relaxation"
        component={Relaxation}
        options={{
          tabBarLabel: 'Relaxamento',
          tabBarIcon: ({color}) => {
            return <Image
              source={iconRelaxation}
              style={{width: 30, height: 30, tintColor: color}}
            />;
          },
        }}
      />

      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          tabBarLabel: 'Aprenda',
          tabBarIcon: ({color}) => {
            return <Image
              source={iconLearn}
              style={{width: 30, height: 30, tintColor: color}}
            />;
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => {
            return <Image
              source={iconProfile}
              style={{width: 30, height: 30, tintColor: color}}
            />;
          },
        }}
      />

    </Tab.Navigator>
  );
}


export default Navigation;
