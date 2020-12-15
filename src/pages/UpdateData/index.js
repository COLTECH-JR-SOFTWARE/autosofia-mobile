import React, { useRef,useState } from 'react';
import Octions from 'react-native-vector-icons/Octicons';
import { useDispatch, useSelector } from 'react-redux';
import {updateProfileRequest} from '~/store/modules/user/actions';

import { Container, ArrowBack, SignLink, Title, Form, SubmitButton, FormTitle, FormInput   } from './styles';

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

const UpdateData = ({navigation}) => {
  const emailRef = useRef();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const password = useSelector(state => state);

  
  function handle(){
    console.log(password)
    // dispatch(updateProfileRequest(name,email,password,password,password));
    navigation.navigate('Navigation');
  }

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
            value={name}
            onChangeText={setName}
          
          />

          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="EMAIL"
            ref={emailRef}
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
          />

          <SubmitButton onPress={handle}>Atualizar</SubmitButton>
        </Form>

      </Container>
    </Background>
  );
}

export default UpdateData;
