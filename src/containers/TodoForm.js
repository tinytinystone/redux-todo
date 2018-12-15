import { connect } from 'react-redux';
import TodoFormView from '../components/TodoFormView';
import api from '../api';

import { addTodo } from '../ducks/todos';

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: async title => {
      await api.post('/todos', {
        body: title,
        complete: false,
      });
      dispatch(addTodo(title));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoFormView);
