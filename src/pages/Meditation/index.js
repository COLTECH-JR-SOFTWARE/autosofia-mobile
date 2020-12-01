import React from 'react';

import { Container, IconContainer, Row } from './styles';
import Button from './Button';
import MainIcon from '~/components/MainIcon';
import Background from '~/components/Background';
import icon1 from '~/assets/iconeProsperidade.png';
import icon2 from '~/assets/iconeAutoaprovacao.png';
import icon3 from '~/assets/iconeSaudeFisica.png';
import icon4 from '~/assets/iconeRecordacoes.png';

const Meditation = ({navigation}) => {
  return (
    <Background blurRadius={20}>
      <Container>
        <MainIcon title="VAMOS MEDITAR JUNTOS"/>
        <IconContainer>
          <Row>
            <Button imageSource={icon1} label="prosperidade" onPress={() => navigation.navigate('PlayerScreen', { text: 'prosperidade'})}/>
            <Button imageSource={icon2} label="autoaprovação" onPress={() => navigation.navigate('PlayerScreen', { text: 'autoaprovação'})}/>
          </Row>
          <Row>
            <Button imageSource={icon3} label="saúde física" onPress={() => navigation.navigate('PlayerScreen', { text: 'saúde física'})}/>
            <Button imageSource={icon4} label="recordações" onPress={() => navigation.navigate('PlayerScreen', { text: 'recordações'})}/>
          </Row>
        </IconContainer>
      </Container>
    </Background>
  );
}

export default Meditation;
