import React from 'react';
import BackButton from './components/BackButton'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, CheckBox } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function Pantallaregistro({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Lógica de registro
    console.log(data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
    <BackButton goBack={navigation.goBack} />      
      {['Nombre', 'Apellido', 'Email', 'Contraseña', 'Fecha de Nacimiento', 'Teléfono', 'Ciudad', 'Departamento'].map((field, index) => (
        <Controller
          key={index}
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={field}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={field === 'Contraseña'}
            />
          )}
          name={field.toLowerCase().replace(' ', '')}
        />
      ))}

      <Text style={styles.label}>Sexo</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.radioContainer}>
            {['Masculino', 'Femenino', 'Otro'].map((sexo, index) => (
              <View key={index} style={styles.radioItem}>
                <CheckBox
                  value={value === sexo}
                  onValueChange={() => onChange(sexo)}
                />
                <Text>{sexo}</Text>
              </View>
            ))}
          </View>
        )}
        name="sexo"
      />

      <View style={styles.checkboxContainer}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              value={value}
              onValueChange={onChange}
            />
          )}
          name="aceptaTerminos"
        />
        <Text style={styles.checkboxLabel}>Acepta los términos y condiciones</Text>
      </View>

      <Button title="Register" onPress={() => navigation.navigate('Main')} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  label: {
    marginBottom: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});