import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, ArrowBack, Title, Description, Bold, SignLink, PlayerDescription } from './styles';

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';
import Player from '~/components/Player';

// const text = 'Categoria';

const PlayerScreen = ({route, navigation}) => {
  const {text} = route.params;
  return (
    <Background blurRadius={20}>
      <Container>
        <ArrowBack>
          <SignLink onPress={() => navigation.navigate('Navigation')}>
            <AntDesign name="leftcircle" size={30} color="#A9A9A9" />
          </SignLink>
        </ArrowBack>

        <MainIcon title="AUTOSOFIA"/>

        <Title>{text}</Title>

        <Player />

        <PlayerDescription>
          <Description>Narrado por <Bold>João Gonsalves</Bold></Description>
          <Description>Criado por <Bold>João Gonsalves</Bold></Description>
        </PlayerDescription>
      </Container>
    </Background>
  );
}

export default PlayerScreen;
