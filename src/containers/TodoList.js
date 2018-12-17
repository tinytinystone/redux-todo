import { connect } from 'react-redux';
import TodoListView from '../components/TodoListView';
import api from '../api';
import { updateAllTodos, deleteTodo } from '../ducks/todos';

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleComplete: async (id, complete) => {
      await api.patch('/todos/' + id, {
        complete: !complete,
      });
      const res = await api.get('/todos');
      dispatch(updateAllTodos(res.data));
    },
    handleDelete: async id => {
      await api.delete('/todos/' + id);
      dispatch(deleteTodo(id));
    },
    refreshAllTodos: async () => {
      const res = await api.get('/todos');
      dispatch(updateAllTodos(res.data));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListView);
