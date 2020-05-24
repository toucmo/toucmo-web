import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import configureStore from './configureStore';
import history from './history';

import LoginView from './views/LoginView';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {/* <Redirect exact from="/" to="/login" /> */}
        <Route exact path="/" component={LoginView} />
        <Route render={() => <h2>This page doesn't exist.</h2>} />
      </Switch>
    </Router>
  </Provider>
);
