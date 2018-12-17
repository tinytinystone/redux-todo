import React, { Component } from 'react';
import TodoList from '../containers/TodoList';
import TodoForm from '../containers/TodoForm';

export default class Homepage extends Component {
  render() {
    return (
      <>
        <TodoList />
        <TodoForm />
      </>
    );
  }
}
