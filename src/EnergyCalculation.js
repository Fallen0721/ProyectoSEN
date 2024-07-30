import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import BackButton from './components/BackButton';

export default function EnergyCalculation({ navigation }) {
  const [televisores, setTelevisores] = useState('');
  const [ventiladores, setVentiladores] = useState('');
  const [airesAcondicionados, setAiresAcondicionados] = useState('');
  const [resultado, setResultado] = useState(null);

  const consumoMedio = {
    televisores: 0.1, // kWh por hora
    ventiladores: 0.05, // kWh por hora
    airesAcondicionados: 1.2, // kWh por hora
  };

  const handleCalculation = () => {
    const total =

    //Convierte las entradas a números, aplica los consumos medios, 
    //y calcula el consumo total. Esta cosa se maneja para que le usuario 
    //no ingrese un valor (parseFloat devuelve Nulo, que se maneja con || 0).
      (parseFloat(televisores) || 0) * consumoMedio.televisores +
      (parseFloat(ventiladores) || 0) * consumoMedio.ventiladores +
      (parseFloat(airesAcondicionados) || 0) * consumoMedio.airesAcondicionados;
    setResultado(total.toFixed(2));
  };

  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Calcular Consumo de Energía</Text>
      <Text style={styles.subtitle}>Ingrese la cantidad de aparatos:</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Televisores"
        keyboardType="numeric"
        value={televisores}
        onChangeText={setTelevisores}
      />
      <TextInput
        style={styles.input}
        placeholder="Ventiladores"
        keyboardType="numeric"
        value={ventiladores}
        onChangeText={setVentiladores}
      />
      <TextInput
        style={styles.input}
        placeholder="Aires Acondicionados"
        keyboardType="numeric"
        value={airesAcondicionados}
        onChangeText={setAiresAcondicionados}
      />
      
      <Button title="Calcular" onPress={handleCalculation} />

      {resultado !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Consumo diario estimado: {resultado} kWh</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
