import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

// import { Container } from './styles';
import background from '~/assets/background.png';

const Background = ({children, blurRadius}) => {
  return (
    <ImageBackground source={background} style={styles.image} blurRadius={blurRadius}>
      {children}
    </ImageBackground>
  )
}

export default Background;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});