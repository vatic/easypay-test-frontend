import {
  CHECK_PHONE_REQUEST,
  CHECK_PHONE_SUCCESS,
  CHECK_PHONE_FAILURE } from '../actions/phones/check_phone';


const initialState = {
  results: [],
  value: null,
  isFetching: false
}

export default function checkPhone(state = initialState, action) {
switch (action.type) {
  case CHECK_PHONE_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    })
  case CHECK_PHONE_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      phone: action.payload.data,
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
