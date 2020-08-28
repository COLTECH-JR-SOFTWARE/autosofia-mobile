import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const List = styled.FlatList`
  padding: 0px;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-bottom: 50px;
`;