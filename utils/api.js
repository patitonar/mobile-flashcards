import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const APP_KEY = 'mobile-flashcards:decks';
const NOTIFICATION_KEY = 'mobile-flashcards:notifications';

export function getDecks() {
  return AsyncStorage.getItem(APP_KEY).then(result => JSON.parse(result));
}

export function addNewDeck(newTitle) {
  return AsyncStorage.mergeItem(
    APP_KEY,
    JSON.stringify({
      [newTitle]: { title: newTitle }
    })
  );
}

export function updateDeck(deck) {
  return AsyncStorage.mergeItem(
    APP_KEY,
    JSON.stringify({
      [deck.title]: deck
    })
  );
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function createNotification() {
  return {
    title: 'Come to Study!',
    body: "Don't forget to study today!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(status => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day'
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
