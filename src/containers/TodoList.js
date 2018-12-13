import { connect } from 'react-redux';
import TodoListView from '../components/TodoListView';

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
  };
}

export default connect(
  mapStateToProps,
  null
)(TodoListView);
