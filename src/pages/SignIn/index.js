import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  H3,
  View,
  Line,
  SocialText,
  Social,
  SignLink,
  SignLinkText
} from './styles';


import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const SignIn = ({navigation}) => {
  const passwordRef = useRef();

  return (
    <Background blurRadius={20}>
      <Container>
        <MainIcon title="Autosofia" />
        <Form>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="EMAIL"
            returnKeyType="next"
          />

          <FormInput
            secureTextEntry
            placeholder="SENHA"
            ref={passwordRef}
            returnKeyType="next"
          />

          <SubmitButton onPress={() => {navigation.navigate('Navigation')}}>Participar</SubmitButton>

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
        <SignLink onPress={() => {navigation.navigate('Remember')}}>
          <SignLinkText>Esqueci minha senha</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

export default SignIn;
