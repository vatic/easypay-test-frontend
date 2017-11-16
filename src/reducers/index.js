import { combineReducers } from 'redux';

import { check } from './check_phone';
import { login } from './login';
import list from './backoffice';

export const phones = combineReducers({
  check,
  list,
});

export const auth = combineReducers({
  login,
});
