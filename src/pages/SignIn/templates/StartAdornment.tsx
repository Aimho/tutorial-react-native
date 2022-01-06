import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LogoSource from '../../../resources/img/logo.png';

const StartAdornment = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={LogoSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  img: {
    width: '100%',
    resizeMode: 'contain',
  },
});

export default StartAdornment;
