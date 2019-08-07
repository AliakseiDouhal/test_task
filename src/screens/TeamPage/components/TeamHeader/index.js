import React from 'react';
import { ImageBackground, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    height: '80%'
  },
  headerWrapper: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// eslint-disable-next-line max-len
// I have used a fake images because API return SVG images format and library which produce support svg work not correctly with last react-native versions
const TeamHeader = () => {
  return (
    <ImageBackground
      source={require('../../../../assets/images/italy.jpg')}
      style={styles.headerWrapper}
      blurRadius={10}
    >
      <Image
        style={styles.imageWrapper}
        resizeMode={'contain'}
        source={require('../../../../assets/images/fakeLogo.png')}
      />
    </ImageBackground>

  );
};

export default TeamHeader;
