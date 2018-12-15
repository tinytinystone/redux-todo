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
    handleDelete: async id => {
      await api.delete('/todos/' + id);
      // 캐시에서 해당 할 일 항목을 삭제 (낙관적 업데이트)
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
