import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE } from '../actions/auth/login';


const initialState = {
  tokenType: '',
  accessToken: '',
  expiresIn: '',
  error: {},
};

// eslint-disable-next-line import/prefer-default-export
export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        tokenType: action.payload.token_type,
        accessToken: action.payload.access_token,
        expiresIn: action.payload.expires_in,
        error: action.payload.error,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
