// src/js/reducers/index.js

import { combineReducers } from 'redux'
import elems from './elems'
import numbers from './numbers'

const rootReducer = combineReducers({
  elems,
  numbers,
})

export default rootReducer

