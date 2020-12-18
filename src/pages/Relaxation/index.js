import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import { AntDesign } from '@expo/vector-icons';


import Player from '~/components/Player';
import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

import { Container, TitlePlayer,PlayerDescription,  ArrowBack,Description, SignLink, Bold } from './styles';

//const sound = 'https://upload-ex-audio.s3.amazonaws.com/fa9974601cbfa15071042f259b639c8c-Golden%20Empire%20-%20The%20126ers.mp3';

const Relaxation = ({route, navigation}) => {
  const [sound, setSound] = useState([]);

  useEffect(() => {
    async function loadSound() {
      const response = await api.get('files');
      setSound(response.data);
    }

    loadSound();
  }, []);

  return (
    <Background blurRadius={20}>
      <Container style={{ flex: 1 }}>
     
       
        
        <MainIcon phrase={"Para começar o dia bem ou para uma boa noite de sono"} />
        <TitlePlayer>Você é especial</TitlePlayer>

        <Player url={sound} />

        <Description>Narrado por <Bold>João Gonsalves</Bold></Description>
        <Description>Criado por <Bold>João Gonsalves</Bold></Description>
      </Container>
    </Background>
  );
}

export default Relaxation;
