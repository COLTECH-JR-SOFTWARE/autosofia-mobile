import React, { useRef, useState } from 'react';
import Octions from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, ArrowBack, SignLink, Title, Form, FormTitle, FormInput, SubmitButton } from './styles';

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const UpdatePassword = ({ navigation }) => {
  const [oldPassword, setoldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const name = useSelector(state => state.user.profile.name);
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.profile.email);
  const newPasswordRef = useRef();

  function handle() {
    console.log(name, email, oldPassword, password, confirmPassword)
    dispatch(updateProfileRequest(name, email, oldPassword, password, confirmPassword));
    navigation.navigate('Navigation');
  }

  return (
    <Background blurRadius={20}>
      <Container>
        <ArrowBack>
          <SignLink onPress={() => navigation.navigate('Navigation')}>
            <Octions from name="x" size={24} color="#a0a0a0" />
          </SignLink>
        </ArrowBack>

        <MainIcon title="AUTOSOFIA" />

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
            value={oldPassword}
            onChangeText={setoldPassword}
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="NOVA SENHA"
            ref={newPasswordRef}
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CONFIRMA NOVA SENHA"
            ref={newPasswordRef}
            returnKeyType="next"
            value={confirmPassword}
            onChangeText={setconfirmPassword}
          />

          <SubmitButton onPress={handle}>Atualizar</SubmitButton>
        </Form>

      </Container>
    </Background>
  );
}

export default UpdatePassword;
