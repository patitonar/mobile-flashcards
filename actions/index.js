export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';

export function fetchDecks(decks) {
  return {
    type: FETCH_DECKS,
    payload: decks
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    payload: title
  };
}

export function updateDeck(deck) {
  return {
    type: UPDATE_DECK,
    payload: deck
  };
}
