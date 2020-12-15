import React from 'react';
import { useSelector } from 'react-redux';
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

  const profile = useSelector(state => state.user.profile);

  return (
    <Background blurRadius={0}>
      <Container>
        <MainIcon title="AUTOSOFIA"/>
        <Message>Bem vindo, {profile.name}!</Message>
      </Container>
    </Background>
  );
}

export default Home;
