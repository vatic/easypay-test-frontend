import { combineReducers } from 'redux';

import { check } from './check_phone';
import { auth } from './auth';
import list from './list';
import del from './del';
import add from './add';

export const phones = combineReducers({
  check,
  list,
  del,
  add,
});

export default auth;
