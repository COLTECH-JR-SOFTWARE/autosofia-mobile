import React from 'react';

import Player from '../../components/Player';

import {
  Container,
  Title,
  LogoContent,
  Message
} from './styles';
import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const Home = () => {
  return (
    <Background blurRadius={0}>
      <Container>
        <MainIcon title="AUTOSOFIA"/>
        <Player/>
        <Message>Bem vindo, User</Message>
      </Container>
    </Background>
  );
}

export default Home;
