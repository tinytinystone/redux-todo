import { connect } from 'react-redux';

import LoginFormView from '../components/LoginFormView';
import api from '../api';

import { login } from '../ducks/users';

// async function mapStateToProps(state) {
//   if (localStorage.getItem('token')) {
//     const res = await api.get('/me');
//     return {
//       id: res.data.id,
//       username: res.data.username,
//     };
//   }
//   return null;
// }

function mapDispatchToprops(dispatch) {
  return {
    handleSubmit: async (username, password) => {
      const res = await api.post('/users/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      dispatch(login(username));
    },
  };
}

export default connect(
  null,
  mapDispatchToprops
)(LoginFormView);
