import React from 'react';

import Player from '~/components/Player';
import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

import { Container, TitlePlayer, Description, Bold} from './styles';

const Relaxation = () => {
  return (
    <Background blurRadius={20}>
      <Container style={{ flex: 1 }}>
        <MainIcon phrase={"Para começar o dia bem ou para uma boa noite de sono"}/>
        <TitlePlayer>Você é especial</TitlePlayer>

        <Player />

        <Description>Narrado por <Bold>João Gonsalves</Bold></Description>
        <Description>Criado por <Bold>João Gonsalves</Bold></Description>
      </Container>
    </Background>
  );
}

export default Relaxation;
