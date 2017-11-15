import { combineReducers } from 'redux';

import checkPhone from './check_phone';

const phones = combineReducers(
  {
    checkPhone,
  }
)

export default phones;
