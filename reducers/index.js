import { FETCH_DECKS, ADD_DECK, UPDATE_DECK } from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.payload
      };
    case ADD_DECK:
      return {
        ...state,
        [action.payload]: { title: action.payload }
      };
    case UPDATE_DECK:
      return {
        ...state,
        [action.payload.title]: action.payload
      };

    default:
      return state;
  }
}

export default decks;
