import React, { useState } from 'react';
import { ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleLogin(){ 
   dispatch(signInRequest(email, password));

    navigation.navigate('Home');

  }

  return (
    <Container keyboardShouldPersistTaps="handled" source={background} blurRadius={15}>
      <MainIcon source={mainIcon} />
      <Title>Autosofia</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="E-MAIL"
          value={email}
          onChangeText={setEmail}
          type="emailAdress"
        />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="SENHA"
          value={password}
          onChangeText={setPassword}
          type="password"
        />
        <Submit onPress={handleLogin}>
          {loading ? <ActivityIndicator size={28} color="#FFF"/> : <SubmitText>entrar</SubmitText>}          
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
