import React, { useRef } from 'react';
import Octions from 'react-native-vector-icons/Octicons';

import { Container, ArrowBack, SignLink, Title, Form, FormTitle, FormInput, SubmitButton } from './styles';

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const UpdatePassword = ({navigation}) => {
  const newPasswordRef = useRef();

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
            placeholder="SENHA ATUAL"
            returnKeyType="next"
            onSubmitEditing={() => newPasswordRef.current.focus()}
          />

          <FormInput
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="NOVA SENHA"
            ref={newPasswordRef}
            returnKeyType="next"
          />

          <SubmitButton onPress={() => {}}>Atualizar</SubmitButton>
        </Form>

      </Container>
    </Background>
  );
}

export default UpdatePassword;
