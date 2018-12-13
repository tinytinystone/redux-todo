import { createStore, combineReducers } from 'redux';
import api from './api';

const ADD = 'my-app/todos/add';
const LOGIN = 'my-app/users/login';

const todos = (state = initialTodoState, action) => {
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
    default:
      return state;
  }
};

const users = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN:
      const username = action.username;
      const password = action.password;
      const res = api.post('/users/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      const { newId, newUsername } = res.data;
      return {
        id: newId,
        username: newUsername,
      };
    default:
      return state;
  }
};

let count = 1;

const initialTodoState = {
  todos: [
    {
      id: count++,
      title: 'Redux 공부',
      complete: false,
    },
  ],
};

const initialUserState = {
  id: null,
  username: null,
};

export function addTodo(title) {
  return {
    type: ADD,
    title,
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    username,
    password,
  };
}

const RootReducers = combineReducers({
  todos,
  users,
});

const store = createStore(
  RootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
