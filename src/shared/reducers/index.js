import { combineReducers } from 'redux';

import counter from './counter';

export default function getRootReducer(scope = 'main') {
  if (scope === 'main') {
    return combineReducers({
      counter
    });
  } else if (scope === 'renderer') {
    return combineReducers({
      counter
    });
  }
}
