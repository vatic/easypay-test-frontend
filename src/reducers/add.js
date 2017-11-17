import {
  ADD_PHONE_REQUEST,
  ADD_PHONE_SUCCESS,
  ADD_PHONE_FAILURE } from '../actions/phones//backoffice';

const initialState = {
  status: false,
  msg: '',
  isFetching: false,
  error: null,
  errorMsg: '',
};

export default function addPhone(state = initialState, action) {
  switch (action.type) {
    case ADD_PHONE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        errorMsg: '',
        msg: '',
      });
    case ADD_PHONE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        errorMsg: '',
        status: true,
        msg: 'Phone added succesfully',
      });
    case ADD_PHONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error,
        status: false,
        msg: '',
        errorMsg: action.payload.error.status === 422 ? 'Phone not valid' : '',
      });
    default:
      return state;
  }
}
