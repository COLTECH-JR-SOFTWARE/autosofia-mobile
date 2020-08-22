import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.ImageBackground`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 20}px;
  resize-mode: cover;
  justify-content: center;
`;

export const MainIcon = styled.Image`
  width: 120px;
  height: 120px;
  align-self: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #ffd600;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
`;

export const Form = styled.View`
  flex: 1;
  padding: 10px 30px;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs(({placeholder, type}) => ({
  placeholderTextColor: 'white',
  selectionColor: 'white',
  underlineColorAndroid: 'transparent',
  secureTextEntry: type === 'password',
  placeholder,
}))`
  margin-bottom: 20px;
  height: 50px;
  padding: 10px 40px;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  opacity: 0.53;
  border-color: #645743;
  background-color: #51493a;
`;

export const Submit = styled.TouchableOpacity`
  height: 55px;
  background-color: #ffdb58;
  border-radius: 30px;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
`;

export const View = styled.View`
  flex-direction: row;
  padding: 10px 0px;
  align-items: center;
`;

export const Line = styled.TouchableOpacity`
  flex: 1;
  margin: 10px;
  height: 2px;
  background-color: #fff;
`;

export const H3 = styled.Text`
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const Social = styled.TouchableOpacity`
  height: 55px;
  background-color: transparent;
  border-radius: 30px;
  border-color: white;
  border-width: 2px;
  justify-content: center;
`;

export const SocialText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
`;
