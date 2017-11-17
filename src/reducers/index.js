import { combineReducers } from 'redux';

import { check } from './check_phone';
import { login } from './login';
import list from './list';
import del from './del';
import add from './add';

export const phones = combineReducers({
  check,
  list,
  del,
  add,
});

export const auth = combineReducers({
  login,
});
