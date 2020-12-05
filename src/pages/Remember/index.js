import React, { useRef } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  ContainerLink
} from './styles';


import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const Remember = ({navigation}) => {
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

          <SubmitButton onPress={() => {Alert.alert('Foi enviado para seu email.')}}>Enviar</SubmitButton>
        </Form>

        <ContainerLink>
          <SignLink onPress={() => {}}>
            <SignLinkText>Reenviar mensagem</SignLinkText>
          </SignLink>

          <SignLink onPress={() => {navigation.navigate('SignIn')}}>
            <SignLinkText>voltar para login</SignLinkText>
          </SignLink>
        </ContainerLink>

      </Container>
    </Background>
  );
}

export default Remember;
