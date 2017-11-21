import {
  PHONES_REQUEST,
  PHONES_SUCCESS,
  PHONES_FAILURE,
  GET_TOTAL_REQUEST,
  GET_TOTAL_SUCCESS,
  GET_TOTAL_FAILURE } from '../actions/phones//backoffice';

const initialState = {
  result: [],
  isFetching: false,
  total: 0,
  error: null,
  currentOffset: 0,
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
        currentOffset: action.extraParams,
        error: null,
      });
    case PHONES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    case GET_TOTAL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case GET_TOTAL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        total: action.payload,
        error: null,
      });
    case GET_TOTAL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        total: 0,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
