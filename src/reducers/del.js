import {
  DEL_PHONE_REQUEST,
  DEL_PHONE_SUCCESS,
  DEL_PHONE_FAILURE } from '../actions/phones//backoffice';

const initialState = {
  status: false,
  msg: '',
  isFetching: false,
  error: null,
  errorMsg: '',
};

export default function delPhone(state = initialState, action) {
  switch (action.type) {
    case DEL_PHONE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        errorMsg: '',
        msg: '',
      });
    case DEL_PHONE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        errorMsg: '',
        status: true,
        msg: 'Phone deleted succesfully',
      });
    case DEL_PHONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
        status: false,
        msg: '',
        errorMsg: action.payload.error.status === 422 ? 'Phone not deleted' : '',
      });
    default:
      return state;
  }
}
