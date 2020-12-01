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
  SignLinkText,
  Underline
} from './styles';


import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const SignUp = ({navigation}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <Background blurRadius={20}>
      <Container>
        <MainIcon title="Autosofia" />
        <Form>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="NOME"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="EMAIL"
            ref={emailRef}
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
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tem uma conta? <Underline>Entrar</Underline></SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

export default SignUp;
