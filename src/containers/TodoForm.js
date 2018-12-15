import { connect } from 'react-redux';
import TodoFormView from '../components/TodoFormView';
import api from '../api';

import { addTodo } from '../ducks/todos';

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: async (title, category) => {
      const res = await api.post('/todos', {
        body: title,
        categoryId: parseInt(category),
        complete: false,
      });
      dispatch(addTodo(title, category));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoFormView);
