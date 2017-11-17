import { combineReducers } from 'redux';

import { check } from './check_phone';
import { login } from './login';
import list from './backoffice';
import delPhone from './delPhone';

export const phones = combineReducers({
  check,
  list,
  delPhone,
});

export const auth = combineReducers({
  login,
});
