import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons'
import {
  Container,
  Form,
  Submit,
  Line,
  H3,
  View,
  Social,
  SocialText,
  SignLink,
  SignLinkText,
  Underline
} from './styles';

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const Start = ({navigation}) => {
  return (
    <Background>
     <Container>
      <MainIcon title="Autosofia"/>
      <Form>
        <Submit onPress={() => navigation.navigate('SignUp')}>
          Cadastre-se com seu e-mail
        </Submit>

        <View>
          <Line />
          <H3>ou</H3>
          <Line />
        </View>

        <Social>
          <Icon name="sc-facebook" size={40} color="#fff"/>
          <SocialText>Continuar com o Facebook</SocialText>
        </Social>

      </Form>
      <SignLink onPress={() => { navigation.navigate('SignIn'); }}>
        <SignLinkText>Já tem uma conta? <Underline>Entrar</Underline></SignLinkText>
      </SignLink>
     </Container>
   </Background>
  );
}

export default Start;
