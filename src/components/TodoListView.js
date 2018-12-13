import React, { Component } from 'react';

export default class TodoListView extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input type="checkbox" value={t.complete} />
            <span>{t.title}</span>
          </li>
        ))}
      </ul>
    );
  }
}
