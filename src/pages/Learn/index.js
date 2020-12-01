import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, List } from './styles';
import Background from '~/components/Background';
import Card from './Card';

const Learn = () => {
  const navigation = useNavigation();

  function navigateToArticle(){
    navigation.navigate('Article');
  }

  return (
    <Background blurRadius={20}>
      <Container>
        <List
          data={[1, 2, 3]}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={card => String(card)}
          renderItem={()=>(
            <Card onPress={navigateToArticle}/>
          )}
        />
      </Container>
    </Background>
  );
}

export default Learn;
