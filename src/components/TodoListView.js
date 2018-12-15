import React, { Component } from 'react';

export default class TodoListView extends Component {
  componentDidMount() {
    this.props.refreshAllTodos();
  }
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input type="checkbox" value={t.complete} />
            <p>
              카테고리<span>{t.category}</span>
            </p>
            <p>{t.title}</p>
            <button onClick={() => this.props.handleDelete(t.id)}>삭제</button>
          </li>
        ))}
      </ul>
    );
  }
}
