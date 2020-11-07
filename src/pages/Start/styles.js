import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 230px;
`;

export const Submit = styled(Button)`
  margin-top: 5px;
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
  height: 46px;
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

export const SignLink =  styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px;
`;

export const Underline = styled.Text`
  text-decoration-line: underline;
`;
