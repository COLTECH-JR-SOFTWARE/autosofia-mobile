
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 30px;
  height: 46px;
  background: rgba(0,0,0, 0.4);
  border-radius: 30px;
  margin-top: 15px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #111110;
`;
