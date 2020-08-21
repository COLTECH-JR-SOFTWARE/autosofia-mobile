import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight(true)}px;
`;

export const LogoContent = styled.View`
  margin-top: 150px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 150px;
	height: 150px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #ffdb58;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
`;
