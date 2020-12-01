import React from 'react';

import { Container, Image, Label } from './styles';

const Button = ({imageSource, label, ...rest}) => {
  return (
    <Container {...rest}>
      <Image source={imageSource}/>
      <Label>{label}</Label>
    </Container>
  )
}

export default Button;
