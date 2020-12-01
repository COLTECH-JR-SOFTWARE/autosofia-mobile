import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import iconHome from '~/assets/iconeHome.png';
import iconMeditation from '~/assets/iconeMeditacao.png';
import iconRelaxation from '~/assets/iconeRelaxamento.png';
import iconLearn from '~/assets/iconeAprenda.png';
import iconProfile from '~/assets/iconePerfil.png';
import pressedIconHome from '~/assets/iconeHomePressionado.png';
import pressedIconMeditation from '~/assets/iconeMeditacaoPressionado.png';
import pressedIconRelaxation from '~/assets/iconeRelaxamentoPressionado.png';
import pressedIconLearn from '~/assets/iconeAprenderPressionado.png';
import pressedIconProfile from '~/assets/iconePerfilPressionado.png';

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
          backgroundColor: "#FBDE0E",
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
          position: 'absolute',
          padding: 10,
          left: 20,
          right: 20,
          bottom: 20,
          borderRadius: 70
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#f6f6f6"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            focused
              ? <Image source={pressedIconHome} style={{width: 30, height: 30, tintColor: color}} />
              : <Image source={iconHome} style={{width: 30, height: 30, tintColor: color}} />
          ),
        }}
      />

      <Tab.Screen
        name="Meditation"
        component={Meditation}
        options={{
          tabBarLabel: 'Meditação',
          tabBarIcon: ({focused, color}) => (
            focused
              ? <Image source={pressedIconMeditation} style={{width: 30, height: 30, tintColor: color}} />
              : <Image source={iconMeditation} style={{width: 30, height: 30, tintColor: color}} />
          ),
        }}
      />

      <Tab.Screen
        name="Relaxation"
        component={Relaxation}
        options={{
          tabBarLabel: 'Relaxamento',
          tabBarIcon: ({focused, color}) => (
            focused
              ? <Image source={pressedIconRelaxation} style={{width: 30, height: 30, tintColor: color}} />
              : <Image source={iconRelaxation} style={{width: 30, height: 30, tintColor: color}} />
          ),
        }}
      />

      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          tabBarLabel: 'Aprenda',
          tabBarIcon: ({focused, color}) => (
            focused
              ? <Image source={pressedIconLearn} style={{width: 30, height: 30, tintColor: color}} />
              : <Image source={iconLearn} style={{width: 30, height: 30, tintColor: color}} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({focused, color}) => (
            focused
              ? <Image source={pressedIconProfile} style={{width: 30, height: 30, tintColor: color}} />
              : <Image source={iconProfile} style={{width: 30, height: 30, tintColor: color}} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}


export default Navigation;
