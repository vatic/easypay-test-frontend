import {
  PHONES_REQUEST,
  PHONES_SUCCESS,
  PHONES_FAILURE } from '../actions/phones//backoffice';

const initialState = {
  result: [],
  isFetching: false,
  error: null,
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case PHONES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case PHONES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        result: action.payload,
        error: null,
      });
    case PHONES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
