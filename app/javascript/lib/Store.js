import { createStore as cs, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import ListReducer from '../reducers/ListsReducer';

import boardsReducer from '../reducers/BoardsReducer';
import statusReducer from '../reducers/StatusReducer';
import listsReducer from '../reducers/ListsReducer';
function reducer(state = {}, action) {
  const curr_state = {
    boards: boardsReducer(state.boards, action),
    status: statusReducer(state.status, action),
    lists: listsReducer(state.lists, action)
  };
  return curr_state
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function createStore(initialState = {}) {
  return cs(reducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));
}
