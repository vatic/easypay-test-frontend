import {
  PHONES_REQUEST,
  PHONES_SUCCESS,
  PHONES_FAILURE } from '../actions/phones//backoffice';


const initialState = {
  result: [],
  isFetching: false,
  error: {},
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case PHONES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case PHONES_SUCCESS:
      console.log(action.payload);
      return Object.assign({}, state, {
        isFetching: false,
        result: action.payload,
        error: null,
      });
    case PHONES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}