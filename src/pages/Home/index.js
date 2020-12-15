import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  LogoContent,
  Message,
  Button,
} from './styles';
import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const Home = () => {
  const navigation = useNavigation();

  function navigateToChat(){
    navigation.navigate('Chat');
  }

  return (
    <Background blurRadius={0}>
      <Container>
        <MainIcon title="AUTOSOFIA"/>
        <Message>Bem vindo, User</Message>
      </Container>
    </Background>
  );
}

export default Home;
