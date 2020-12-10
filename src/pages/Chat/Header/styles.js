import styled from 'styled-components/native';

export const Container = styled.View`
  height: 70px;
  background-color: #fff;
  justify-content: space-between;
  padding: 20px 20px 14px;
  flex-direction: row;
  align-items: center;
  border-color: #fff;
  border-width: 1px;
  border-bottom-color: #ddd;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #FBDE0E;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-left: 10px;
`;