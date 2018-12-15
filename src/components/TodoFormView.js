import React, { Component } from 'react';

export default class TodoFormView extends Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          const title = e.target.elements.body.value;
          this.props.handleSubmit(title);
        }}
      >
        <input type="text" name="body" />
        <button>전송</button>
      </form>
    );
  }
}
