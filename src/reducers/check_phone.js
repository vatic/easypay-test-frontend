// import {
//   PL_PROFILE_REQUEST,
//   PL_PROFILE_SUCCESS,
//   PL_PROFILE_FAILURE } from '../actions/player_profile';


const initialState = {
phone: null,
isFetching: false
}

export default function checkPhone(state = initialState, action) {
switch (action.type) {
  // case PL_PROFILE_REQUEST:
  //   return Object.assign({}, state, {
  //     isFetching: true
  //   })
  // case PL_PROFILE_SUCCESS:
  //   return Object.assign({}, state, {
  //     isFetching: false,
  //     profile: action.payload.data,
  //     error: null,
  //   })
  // case PL_PROFILE_FAILURE:
  //   return Object.assign({}, state, {
  //     isFetching: false,
  //     error: action.error,
  //   })
  default:
    return state
}
}
