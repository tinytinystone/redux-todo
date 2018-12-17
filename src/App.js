import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './App.scss';
import Homepage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/todos" component={Homepage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
