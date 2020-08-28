import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
`;

export const Content = styled.ScrollView`
  background-color: #fff;
  padding: 10px 20px 0;
`;

export const ContentText = styled.Text`
  color: #222;
  font-size: 17px;
`;