import React from 'react';

import { Container, Icon, Title, Phrase } from './styles';
import iconMain from '~/assets/main-icon.png';

const MainIcon = ({title = '', phrase= ''}) => {
  return (
    <Container>
      <Icon source={iconMain} />
      {
        title === ''?
          <Phrase>{phrase}</Phrase>
          :<Title>{title}</Title>
      }
    </Container>
  );
}

export default MainIcon;
