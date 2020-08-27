import React from 'react';

import { Container, Image, Label } from './styles';

const Button = ({imageSource, label}) => {
  return (
    <Container>
      <Image source={imageSource}/>
      <Label>{label}</Label>
    </Container>
  )
}

export default Button;