import React from 'react';
import Header from './components/Header'
import Button from './components/Button'
import Background from './components/Background'
import { BackHandler } from 'react-native';


const Pantallaincial = ({navigation}) =>{
  return (
    <Background>
      <Header>
        Ciruitos Logicos
      </Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('login')}>
        BUSCA QUIEN TE PISE
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Registros')}>
          Registrarse
      </Button>


    </Background>
  )
}

export default Pantallaincial;