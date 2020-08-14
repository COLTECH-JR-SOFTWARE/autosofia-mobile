import React from 'react';
import {ImageBackground, Image} from 'react-native';
import {
  Container,
  Form,
  Title,
  Input,
  Submit,
  SubmitText,
  H3,
  View,
  Line,
  SocialText,
  Social,
  MainIcon,
} from './styles';

import background from '../../assets/background.png';
import mainIcon from '../../assets/main-icon.png';

export default function Login({navigation}) {
  return (
    <Container keyboardShouldPersistTaps="handled" source={background} blurRadius={15}>
      <MainIcon source={mainIcon} />
      <Title>Autosofia</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="E-MAIL"
          type="emailAdress"
        />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="SENHA"
          type="password"
        />
        <Submit onPress={() => {}}>
          <SubmitText>entrar</SubmitText>
        </Submit>
        <View>
          <Line />
          <H3>ou</H3>
          <Line />
        </View>
        <Social onPress={() => navigation.navigate('Inicio')}>
          <SocialText>continuar com o facebook</SocialText>
        </Social>
      </Form>
    </Container>
  );
}
