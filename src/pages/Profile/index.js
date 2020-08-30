import React from 'react';

import Background from '~/components/Background';
import MainIcon from '~/components/MainIcon';

import { Container, SignLink, SignLinkText, Info, ArrowBack } from './styles';

const Profile = ({navigation}) => {
  return (
    <Background blurRadius={20}>
      <Container>
        <MainIcon title="AUTOSOFIA"/>

        <Info>
          <SignLink onPress={() => navigation.navigate('UpdateData')}>
            <SignLinkText>INFORMAÇÕES DA CONTA</SignLinkText>
          </SignLink>
          <SignLink onPress={() => navigation.navigate('UpdatePassword')}>
            <SignLinkText>MUDAR SENHA</SignLinkText>
          </SignLink>
        </Info>
      </Container>
    </Background>
  );
}

export default Profile;
