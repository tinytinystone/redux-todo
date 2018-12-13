import React, { Component } from 'react';

export default class LoginFormView extends Component {
  render() {
    return (
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>로그인</button>
      </form>
    );
  }
}
