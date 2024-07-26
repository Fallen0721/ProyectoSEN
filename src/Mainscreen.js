import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Programa de Energía</Text>
      <Button
        title="Calcular Consumo de Energía"
        onPress={() => navigation.navigate('EnergyCalculation')}
      />
      <Button
        title="Configurar Notificaciones"
        onPress={() => navigation.navigate('NotificationSettings')}
      />
      <Button
        title="Estadísticas de Consumo"
        onPress={() => navigation.navigate('ConsumptionStatistics')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
