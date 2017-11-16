import { combineReducers } from 'redux';

import check from './check_phone';

const phones = combineReducers({
  check,
});

export default phones;
