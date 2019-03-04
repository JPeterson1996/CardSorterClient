import {combineReducers} from 'redux';

import * as cardActions from '../actions/cardAction';
import debugconsole from '../debug/Debugconsole';
import Category from '../elements/Category';

/**
 *
 * @param {boardState} state
 * @param {cardActions} action
 * @return {boardState}
 */
function categories(state={}, action) {
  switch (action.type) {
    case cardActions.CREATE_CATEGORY: {
      const id = action.payload.categoryID;
      const category = new Category(id, action.payload.title);
      category.addCard(action.payload.cardID);

      const newState = Object.assign({}, state);
      newState[id] = category;
      return newState;
    }
    case cardActions.ADD_CARD_CATEGORY: {
      const cardID = action.payload.cardID;
      const categoryID = action.payload.categoryID;
      const newState = Object.assign({}, state);

      newState[categoryID].addCard(cardID);
      return newState;
    }
    case cardActions.REMOVE_CARD_CATEGORY: {
      const cardID = action.payload.cardID;
      const categoryID = action.payload.categoryID;
      const newState = Object.assign({}, state);

      newState[categoryID].removeCard(cardID);
      return newState;
    }
    default:
      return state;
  }
}

/**
 *
 * @param {boardState} state
 * @param {ReduxAction} action
 * @return {boardState}
 */
function container(state={}, action) {
  switch (action.type) {
    case cardActions.ADD_CARD_CONTAINER: {
      return [
        ...state,
        action.payload.cardID,
      ];
    }
    case cardActions.REMOVE_CARD_CONTAINER: {
      return [...state].filter((x) => x !== action.payload.cardID);
    }
    default:
      return state;
  }
}


const app = combineReducers({
  categories,
  container,
});

export default app;
