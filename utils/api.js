import { AsyncStorage } from 'react-native';

const APP_KEY = 'mobile-flashcards:decks';

export const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

export function initializeState() {
  return AsyncStorage.setItem(APP_KEY, JSON.stringify(initialState));
}

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
