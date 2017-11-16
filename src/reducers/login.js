import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE } from '../actions/auth/login';


const initialState = {
  tokenType: '',
  accessToken: '',
  expiresIn: '',
  error: null,
};

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        tokenType: action.payload.tokenType,
        accessToken: action.payload.accessToken,
        expiresIn: action.payload.expiresIn,
        error: null,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}
