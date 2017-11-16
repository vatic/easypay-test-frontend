import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App.js';

import reducers from './reducers'; // Or wherever you keep your reducers



const store = createStore(
  combineReducers({
    reducers,
  }),
  applyMiddleware(thunk, logger)
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);