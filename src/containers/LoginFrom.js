import { connect } from 'react-redux';
import LoginFormView from '../components/LoginFormView';

function mapStateToProps(state) {
  return {
    id: state.users.id,
    username: state.users.username,
  };
}

export default connect(
  mapStateToProps,
  null
)(LoginFormView);
