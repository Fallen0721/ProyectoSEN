import React from 'react';
import BackButton from './components/BackButton';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function EnergyCalculation({ navigation }) {
  const [consumo, setConsumo] = React.useState('');

  const handleCalculation = () => {
    // logia de calculo de consumo de energia
  };

  return (
    <View style={styles.container}>
        <BackButton/>
      <Text style={styles.title}>Calcular Consumo de Energía</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su consumo"
        value={consumo}
        onChangeText={setConsumo}
      />
      <Button title="Calcular" onPress={handleCalculation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
