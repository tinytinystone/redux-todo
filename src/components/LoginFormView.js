import React, { Component } from 'react';

export default class LoginFormView extends Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          const username = e.target.elements.username.value;
          const password = e.target.elements.password.value;
          this.props.handleSubmit(username, password);
        }}
      >
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>로그인</button>
      </form>
    );
  }
}
