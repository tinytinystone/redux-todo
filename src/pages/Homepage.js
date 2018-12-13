import React, { Component } from 'react';
import TodoList from '../containers/TodoList';
import LoginFrom from '../containers/LoginFrom';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <LoginFrom />
        <TodoList />
      </div>
    );
  }
}
