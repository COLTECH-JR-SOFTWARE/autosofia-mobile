import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
  height: 30px;
  width: 30px;
  background-color: #666666;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const ArrowBack = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 10px;
  padding: 0 30px;
`;

export const FormInput = styled(Input)`
`;

export const FormTitle = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

