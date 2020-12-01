import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 85%;
  background-color: #fff;
  border-radius: 7px;
  padding: 14px;
  height: 300px;
  align-self: center;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: #111;
  font-size: 18px;
`;

export const ContentContainer = styled.View`
  margin-top: 14px;
  flex: 1;
`;

export const Midia = styled.View`
  background-color: #FBDE0E;
  height: 70%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const ContentBottom = styled.View`
  flex: 1;
  background-color: #ddd;
  padding: 5px 10px 0;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  overflow: hidden;
`;

export const ContentTitle = styled.Text`
  color: #222;
  font-size: 18px;
`;

export const ContentDescription = styled.Text`
  color: #665;
  padding-top: 2px;
  font-size: 17px;
`;
