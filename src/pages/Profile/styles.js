import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 70px 30px;
`;

export const Info = styled.View`
  margin-top: 50px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  background-color: transparent;
  border-radius: 30px;
  border-color: white;
  border-width: 2px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin-left: 30px;
`;
