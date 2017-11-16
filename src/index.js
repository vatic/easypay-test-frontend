import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './App';
import Login from './containers/Login';
import BackOffice from './components/BackOffece';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/bo" component={BackOffice} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
