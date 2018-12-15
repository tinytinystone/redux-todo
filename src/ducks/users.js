const GET = 'my-app/users/get';
const LOGIN = 'my-app/users/login';
const LOGOUT = 'my-app/users/logout';

export default function users(state = initialUserState, action) {
  switch (action.type) {
    case GET:
      return {
        id: action.id,
        username: action.username,
      };
    case LOGIN:
      return {
        username: action.username,
      };
    default:
      return state;
  }
}

const initialUserState = {
  id: null,
  username: null,
};

export function get(id, username) {
  return {
    type: GET,
    id,
    username,
  };
}
export function login() {
  return {
    type: LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
