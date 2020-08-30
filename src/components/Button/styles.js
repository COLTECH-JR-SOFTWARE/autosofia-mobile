import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container =  styled(RectButton)`
  height: 46px;
  background: #ffdb58;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;
