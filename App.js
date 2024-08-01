// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pantallaincial from './src/Pantallaincial';
import Pantallalogin from './src/Pantallalogin';
import Pantallaregistro from './src/Pantallaregistro';
import MainScreen from './src/Mainscreen';
import NotificationSettings from './src/NotificationSettings';
import EnergyCalculation from './src/EnergyCalculation';
import ConsumptionStatistics from './src/ConsumptionStatistics';
import iagpt from './src/iagpt';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Inicio" component={Pantallaincial} />
        <Stack.Screen name="Registros" component={Pantallaregistro} />
        <Stack.Screen name="login" component={Pantallalogin} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="EnergyCalculation" component={EnergyCalculation} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettings}/>
        <Stack.Screen name="ConsumptionStatistics" component={ConsumptionStatistics}/>
        <Stack.Screen name="iagpt" component={iagpt}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
