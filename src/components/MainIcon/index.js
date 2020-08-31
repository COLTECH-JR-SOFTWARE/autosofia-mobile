import React from 'react';

import { Container, Icon, Title } from './styles';
import iconMain from '~/assets/main-icon.png';

const MainIcon = ({title = ''}) => {
  return (
    <Container>
      <Icon source={iconMain} />
      <Title>{title}</Title>
    </Container>
  );
}

export default MainIcon;
