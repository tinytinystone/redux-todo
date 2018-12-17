import { connect } from 'react-redux';

import LoginFormView from '../components/LoginFormView';
import api from '../api';
import withLoading from '../hoc/withLoading';

import { login, loading } from '../ducks/users';

function mapStateToProps(state) {
  return {
    username: state.users.username,
    loading: state.users.isLoading,
  };
}

function mapDispatchToprops(dispatch) {
  return {
    handleSubmit: async (username, password) => {
      dispatch(loading());
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
  mapStateToProps,
  mapDispatchToprops
)(withLoading(LoginFormView));
