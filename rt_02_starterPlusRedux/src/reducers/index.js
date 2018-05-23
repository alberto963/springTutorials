import { combineReducers } from 'redux'
import click from './click'
import check from './check'
import jump from './jump'

const gameApp = combineReducers({
  click,
  check,
  jump,
})

export default gameApp
