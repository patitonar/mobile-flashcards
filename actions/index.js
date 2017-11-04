export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_DECK = 'ADD_DECK';

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
