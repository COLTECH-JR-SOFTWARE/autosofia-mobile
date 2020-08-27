import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { Container, IconContainer, Title } from './styles';

const Header = () => {
  const navigation = useNavigation();

  function navigateToLearn(){
    navigation.navigate('Learn');
  }

  return (
    <Container>
      <IconContainer onPress={navigateToLearn}>
        <Icon name="angle-left" size={26} color="#FFF" />
      </IconContainer>
      <Title>Título do artigo</Title>
    </Container>
  )
}

export default Header;