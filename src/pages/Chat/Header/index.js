import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, IconContainer, Title } from './styles';

const Header = () => {
  return (
    <Container>
      <IconContainer>
        <Icon name="angle-left" size={24} color="#FBDE0E" />
      </IconContainer>
      <Title>CHAT</Title>
    </Container>
  )
}

export default Header;