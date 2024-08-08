import React, { useEffect } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

// Configurar el controlador de notificaciones para definir cómo se deben manejar las notificaciones
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, // Muestra una alerta en la pantalla
    shouldPlaySound: true, // Reproduce un sonido para la notificación
    shouldSetBadge: true,  // Coloca un distintivo en el icono de la aplicación
  }),
});

const NotificationSettings = () => {
  
  useEffect(() => {
    // Verificar si la aplicación se está ejecutando en un dispositivo móvil
    if (Device.isDevice) {
      registerForPushNotificationsAsync();
    }

    // notificaciones entrante
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificación recibida:', notification);
    });

    // Limpia la suscripción de notificaciones
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
    };
  }, []);

  // Funcion para registrar la aplicación para recibir notificaciones
  const registerForPushNotificationsAsync = async () => {
    // Canal para android
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250], // patron de vibración
        lightColor: '#FF231F7C', 
      });
    }

    // permisos para notificaciones
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission not granted!');
      return;
    }
  };

  // funcion para enviar notifciaciones locale
  const handleSendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Notificación Local", 
        body: "Esta es una notificación local de prueba", 
      },
      trigger: null, 
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BackButton goBack={navigation.goBack} />
      <Text>Configuración de Notificaciones</Text>
      <Button title="Enviar Notificación" onPress={handleSendNotification} />
    </View>
  );
};

export default NotificationSettings;