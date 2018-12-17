const GET = 'my-app/users/get';
const LOGIN = 'my-app/users/login';
const LOGOUT = 'my-app/users/logout';
const LOADING = 'my-app/users/loading';

export default function users(state = initialUserState, action) {
  switch (action.type) {
    case GET:
      return {
        id: action.id,
        username: action.username,
        isLoading: false,
      };
    case LOGIN:
      return {
        username: action.username,
        isLoading: false,
      };
    case LOADING:
      return {
        isLoading: true,
      };
    default:
      return state;
  }
}

const initialUserState = {
  id: null,
  username: null,
  isLoading: false,
};

export function get(id, username) {
  return {
    type: GET,
    id,
    username,
  };
}
export function login(username) {
  return { type: LOGIN, username };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}
