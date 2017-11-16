import {
  CHECK_PHONE_REQUEST,
  CHECK_PHONE_SUCCESS,
  CHECK_PHONE_FAILURE } from '../actions/phones/check_phone';


const initialState = {
  results: [],
  value: '',
  isFetching: false,
  error: null,
}

export default function check(state = initialState, action) {
switch (action.type) {
  case CHECK_PHONE_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    })
  case CHECK_PHONE_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      results: action.payload.phones,
      value: action.extraParams.phone,
      error: null,
    })
  case CHECK_PHONE_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      error: action.error,
    })
  default:
    return state
}
}
