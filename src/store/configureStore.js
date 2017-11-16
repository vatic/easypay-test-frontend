import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import { routerMiddleware, routerReducer } from 'react-router-redux'
// import {hashHistory} from 'react-router'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import fetchMiddleware from '../middlewares/fetch';

import phones from '../reducers';

const logger = createLogger();
// const routerMW = routerMiddleware(hashHistory)
const rootReducer = combineReducers(
  {
    // routing: routerReducer,
    phones,
  },
);

const initialState = {};

export default function configureStore() {
  let store;
  if (module.hot) {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware, fetchMiddleware, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware), f => f,
    ));
  }
  return store;
}

