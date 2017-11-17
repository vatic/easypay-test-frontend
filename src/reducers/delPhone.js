import {
  DEL_PHONE_REQUEST,
  DEL_PHONE_SUCCESS,
  DEL_PHONE_FAILURE } from '../actions/phones//backoffice';

const initialState = {
  status: false,
  msg: '',
  isFetching: false,
  error: null,
};

export default function delPhone(state = initialState, action) {
  switch (action.type) {
    case DEL_PHONE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
      });
    case DEL_PHONE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        msg: action.payload.msg,
        status: action.payload.status,
        error: null,
      });
    case DEL_PHONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}
