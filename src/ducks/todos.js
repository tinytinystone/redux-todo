const GET = 'my-app/todos/get';
const ADD = 'my-app/todos/add';
const DELETE = 'my-app/todos/delete';
const COMPLETE = 'my-app/todos/complete';
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
            category: action.category,
          },
        ],
      };
    case DELETE:
      const deletedTodoIndex = state.todos.findIndex(t => {
        return action.id === t.id;
      });
      state.todos.splice(deletedTodoIndex, 1);
      return {
        todos: [...state.todos],
      };
    case UPDATE_ALL:
      return {
        todos: action.todos.map(t => ({
          id: t.id,
          title: t.body,
          complete: t.complete,
          category: t.categoryId,
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

export function addTodo(title, category) {
  return {
    type: ADD,
    title,
    category,
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
