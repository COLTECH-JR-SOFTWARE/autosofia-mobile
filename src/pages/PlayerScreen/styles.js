import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ArrowBack = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 40px;
`;

export const SignLink =  styled.TouchableOpacity``;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  align-self: center;
  margin-top: 70px;
`;

export const Description = styled.Text`
  font-size: 14px;
  text-align: center;
  color: white;
  margin: 5px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const PlayerDescription = styled.View`
  flex: 1;
`;
