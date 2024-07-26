import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';


const Background = ({ children }) => {
  return (
    <ImageBackground
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f5f5e9',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
});

// Exportar el componente al final del archivo
export default Background;
