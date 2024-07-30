import React from 'react';
import Header from './components/Header'
import Button from './components/Button'
import Background from './components/Background'
import { Image, StyleSheet } from 'react-native';


const Pantallaincial = ({navigation}) =>{
  return (
    <Background>
      <Header>
        Ciruitos Logicos
      </Header>
      <Image
        source={require('./assets/photo.png')}
        style={styles.image}
      />
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('login')}>
        Iniciar Sesion
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Registros')}>
          Registrarse
      </Button>


    </Background>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Pantallaincial;