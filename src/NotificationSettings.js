import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const NotificationSettings = () => {
  useEffect(() => {
    if (Device.isDevice) {
      registerForPushNotificationsAsync();
    }

    // Listener para notificaciones entrantes
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificación recibida:', notification);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
    };
  }, []);

  const registerForPushNotificationsAsync = async () => {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission not granted!');
      return;
    }
  };

  const handleSendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Notificación Local",
        body: "Esta es una notificación local de prueba",
      },
      trigger: null, // Dejar null para enviar inmediatamente
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configuración de Notificaciones</Text>
      <Button title="Enviar Notificación" onPress={handleSendNotification} />
    </View>
  );
};

export default NotificationSettings;
