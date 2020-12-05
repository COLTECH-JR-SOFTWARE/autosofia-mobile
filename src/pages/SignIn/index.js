import React, { useRef, useState, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import Icon from 'react-native-vector-icons/EvilIcons';
import { LoginButton } from 'react-native-fbsdk';

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

const SignIn = ({ navigation }) => {

  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const loading = useSelector(state => state.auth.loading);


  async function handlesubmit() {
    const result = dispatch(signInRequest(email, senha));
  }

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
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            secureTextEntry
            placeholder="SENHA"
            ref={passwordRef}
            returnKeyType="next"
            value={senha}
            onChangeText={setSenha}
          />

          <SubmitButton loading={loading} onPress={handlesubmit}>
            Participar
            </SubmitButton>

          <View>
            <Line />
            <H3>ou</H3>
            <Line />
          </View>

          <Social>
            <Icon name="sc-facebook" size={40} color="#fff" />
            <SocialText>Continuar com o Facebook</SocialText>
          </Social>

        </Form>
        <SignLink onPress={() => {

          navigation.navigate('Remember')
        }}>
          <SignLinkText >Esqueci minha senha</SignLinkText>
        </SignLink>

        <View>
          <LoginButton
            publishPermissions={["email"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login failed with error: " + error.message);
                } else if (result.isCancelled) {
                  alert("Login was cancelled");
                } else {
                  alert("Login was successful with permissions: " + result.grantedPermissions)
                }
              }
            }
            onLogoutFinished={() => alert("User logged out")} />
        </View>

      </Container>
    </Background>
  );
}

export default SignIn;
