import React from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';

// import { Container } from './styles';

import background from '~/assets/background.png';

const Home = () => {
  return (
    <View style={styles.container}>
        <Text>
          HOME
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'transparent',
  },
});

export default Home;
