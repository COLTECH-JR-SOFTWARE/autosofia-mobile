import React, { useRef } from 'react';
import Octions from 'react-native-vector-icons/Octicons';

import { Container, ArrowBack, SignLink, Title, Form, SubmitButton, FormTitle, FormInput   } from './styles';

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const UpdateData = ({navigation}) => {
  const emailRef = useRef();

  return (
    <Background blurRadius={20}>
      <Container>
        <ArrowBack>
          <SignLink onPress={() => navigation.navigate('Navigation')}>
            <Octions from name="x" size={24} color="#a0a0a0"/>
          </SignLink>
        </ArrowBack>

        <MainIcon title="AUTOSOFIA"/>

        <FormTitle>
          <Title>Atualize seus dados</Title>
        </FormTitle>

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

          <SubmitButton onPress={() => {}}>Atualizar</SubmitButton>
        </Form>

      </Container>
    </Background>
  );
}

export default UpdateData;
