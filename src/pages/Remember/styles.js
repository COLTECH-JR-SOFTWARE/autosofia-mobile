import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 70px 30px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const Line = styled.TouchableOpacity`
  flex: 1;
  margin: 10px;
  height: 2px;
  background-color: #fff;
`;

export const H3 = styled.Text`
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const View = styled.View`
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
`;

export const Social = styled.TouchableOpacity`
  flex-direction: row;
  height: 55px;
  background-color: transparent;
  border-radius: 30px;
  border-color: white;
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;

export const SocialText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

export const ContainerLink = styled.View`
  margin: 20px;
  align-items: center;
`;

export const SignLink =  styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  text-decoration-line: underline;
`;
