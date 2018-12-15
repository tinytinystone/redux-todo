import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import TodoList from './containers/TodoList';

import './App.scss';
import Homepage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
