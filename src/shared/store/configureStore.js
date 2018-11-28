import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import getRootReducer from '../reducers';
import {
  forwardToMain,
  forwardToRenderer,
  triggerAlias,
  replayActionMain,
  replayActionRenderer,
} from 'electron-redux';

const isDevelopment = process.env.NODE_ENV !== 'production'

export default function configureStore(initialState, scope = 'main') {
  let middleware = [
  ];

  if (isDevelopment) {
    middleware = [
      logger,
      ...middleware
    ]
  }

  if (scope === 'renderer') {
    middleware = [
      forwardToMain,
      ...middleware,
    ];
  }

  if (scope === 'main') {
    middleware = [
      triggerAlias,
      ...middleware,
      forwardToRenderer,
    ];
  }

  const enhanced = [
    applyMiddleware(...middleware),
  ];

  const rootReducer = getRootReducer(scope);
  const enhancer = compose(...enhanced);
  const store = createStore(rootReducer, initialState, enhancer);

  if (scope === 'main') {
    replayActionMain(store);
  } else {
    replayActionRenderer(store);
  }

  return store;
}
