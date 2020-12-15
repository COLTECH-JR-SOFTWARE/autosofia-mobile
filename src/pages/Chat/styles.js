import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.FlatList`
  flex: 1;
  padding: 10px 20px;
`;

export const SenderMessage = styled.View`
  background-color: #FFF7CF;
  border-color: #0000001A;
  border-radius: 8px;
  border-bottom-right-radius: 0;
  padding: 12px;
`;

export const ReceiverMessage = styled.View`
  background-color: #fff;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-width: 1px;
  border-color: #0000001A;
  padding: 10px;
  margin-right: auto;
`;

export const MessageContainer = styled.View`
  margin-bottom: 15px;
  align-items: flex-end;
  margin-right: ${props => props.admin ? 'auto' : 0};
`;

export const MessageText = styled.Text`
  color: #222;
  font-size: 16px;
`;

export const MessageDate = styled.Text`
  color: #4D4D4D;
  opacity: 0.75;
  font-size: 13px;
  text-align: right;
`;

export const BottomBar = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: transparent;
  border-top-color: #ddd;
`;

export const Input = styled.TextInput`
  padding: 20px;
  font-size: 16px;
  flex: 1;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-right: 10px;
  transform: rotate(45deg);
  padding: 10px;
`;
