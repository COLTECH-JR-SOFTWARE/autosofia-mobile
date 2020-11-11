import React from 'react';
import { Alert } from 'react-native';

import { Container } from './styles';

import Background from '~/components/Background';

const Chat = () => {
  return (
    <Background>
      <Container>
        {Alert.alert("Em processo de construção!!!")}
      </Container>
    </Background>
  );
}

export default Chat;
