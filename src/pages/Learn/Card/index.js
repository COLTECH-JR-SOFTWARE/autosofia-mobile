import React from 'react';

import { 
  Container,
  Title,
  ContentContainer,
  ContentBottom,
  ContentDescription,
  ContentTitle,
  Midia,
 } from './styles';

const Card = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>Mensagem do administrador</Title>
      <ContentContainer>
        <Midia></Midia>
        <ContentBottom>
          <ContentTitle>Pode começar a baderna</ContentTitle>
          <ContentDescription>Descrição do video</ContentDescription>
        </ContentBottom>
      </ContentContainer>
    </Container>
  );
}

export default Card;