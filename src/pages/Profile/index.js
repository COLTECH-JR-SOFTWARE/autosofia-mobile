import React from 'react';
import {AntDesign} from '@expo/vector-icons'

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

import { Container, Info, Button, ButtonText  } from './styles';

const Profile = ({navigation}) => {
  return (
    <Background blurRadius={20}>
      <Container>
        <MainIcon title="AUTOSOFIA"/>

        <Info>
          <Button onPress={() => navigation.navigate('UpdateData')}>
            <ButtonText>MEUS DADOS</ButtonText>
            <AntDesign name="right" size={24} color="white" style={{marginRight: 10}}/>
          </Button>

          <Button onPress={() => navigation.navigate('Chat')}>
            <ButtonText>Chat</ButtonText>
            <AntDesign name="right" size={24} color="white" style={{marginRight: 10}}/>
          </Button>

          <Button onPress={() => navigation.navigate('UpdatePassword')}>
            <ButtonText>Mudar senha</ButtonText>
            <AntDesign name="right" size={24} color="white" style={{marginRight: 10}}/>
          </Button>

          <Button onPress={() => navigation.navigate('SignIn')}>
            <ButtonText>Sair</ButtonText>
          </Button>

        </Info>
      </Container>
    </Background>
  );
}

export default Profile;
