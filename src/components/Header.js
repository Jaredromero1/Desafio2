import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/Rick_and_Morty.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    position: 'fixed',
    top: 0,
    zIndex: 1,
    
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    
  },
});

export default Header;
