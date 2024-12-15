import { Notifications } from 'react-native-notifications';

export const exibirNotificacao = (title, message) => {
  Notifications.postLocalNotification({
    title: title,
    body: message,
    sound: 'default', 
    extra: "data",
  });
};