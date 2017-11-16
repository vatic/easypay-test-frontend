import { combineReducers } from 'redux';

import { check } from './check_phone';
import { login } from './login';

export const phones = combineReducers({
  check,
});

export const auth = combineReducers({
  login,
});
