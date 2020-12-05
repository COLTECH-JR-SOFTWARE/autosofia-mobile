import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';
import {signOut} from '~/store/modules/auth/actions'
import { Container, Info, Button, ButtonText  } from './styles';
import { useLinkProps } from '@react-navigation/native';

const Profile = ({navigation}) => {
  const signed = useSelector(state => state.auth.signed);
  const dispatch = useDispatch();

  async function Signout() {
    dispatch(signOut());
    
  }
  return (
    <Background blurRadius={20}>
      <Container>
        <MainIcon title="AUTOSOFIA"/>

        <Info>
          <Button onPress={() => navigation.navigate('UpdateData')}>
            <ButtonText>MEUS DADOS</ButtonText>
            <AntDesign name="right" size={24} color="white" style={{marginRight: 10}}/>
          </Button>

          <Button onPress={() => navigation.navigate('Chat')}>
            <ButtonText>Chat</ButtonText>
            <AntDesign name="right" size={24} color="white" style={{marginRight: 10}}/>
          </Button>

          <Button onPress={() => navigation.navigate('UpdatePassword')}>
            <ButtonText>Mudar senha</ButtonText>
            <AntDesign name="right" size={24} color="white" style={{marginRight: 10}}/>
          </Button>

          <Button onPress={Signout}>
            <ButtonText>Sair</ButtonText>
          </Button>

        </Info>
      </Container>
    </Background>
  );
}

export default Profile;
