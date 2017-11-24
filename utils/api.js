import { AsyncStorage } from 'react-native';

const APP_KEY = 'mobile-flashcards:decks';

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
