import React, { Component } from 'react';

export default class TodoFormView extends Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          const title = e.target.elements.body.value;
          const category = e.target.elements.category.value;
          this.props.handleSubmit(title, category);
        }}
      >
        <input type="text" name="body" />
        <select name="category">
          <option value="1">공부</option>
          <option value="2">집안일</option>
          <option value="3">쇼핑</option>
        </select>
        <button>전송</button>
      </form>
    );
  }
}
