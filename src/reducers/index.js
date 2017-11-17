import { combineReducers } from 'redux';

import { check } from './check_phone';
import { login } from './login';
import list from './backoffice';
import delPhone from './delPhone';
import addPhone from './addPhone';

export const phones = combineReducers({
  check,
  list,
  delPhone,
  addPhone,
});

export const auth = combineReducers({
  login,
});
