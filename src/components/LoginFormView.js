import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginFormView extends Component {
  render() {
    if (this.props.username) {
      alert(`${this.props.username}님, 환영합니다!`);
      return <Redirect to="/todos" />;
    }
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
