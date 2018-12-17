const ADD = 'my-app/todos/add';
const DELETE = 'my-app/todos/delete';
const UPDATE_ALL = 'my-app/todos/update-all';

export default function todos(state = initialTodoState, action) {
  switch (action.type) {
    case ADD:
      return {
        todos: [
          ...state.todos,
          {
            id: count++,
            title: action.title,
            complete: false,
          },
        ],
      };
    case DELETE:
      return {
        todos: [...state.todos.filter(t => action.id !== t.id)],
      };
    case UPDATE_ALL:
      return {
        todos: action.todos.map(t => ({
          id: t.id,
          title: t.body,
          complete: t.complete,
        })),
      };
    default:
      return state;
  }
}

let count = 1;

const initialTodoState = {
  todos: [],
};

export function addTodo(title) {
  return {
    type: ADD,
    title,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE,
    id,
  };
}

export function updateAllTodos(todos) {
  return {
    type: UPDATE_ALL,
    todos,
  };
}
