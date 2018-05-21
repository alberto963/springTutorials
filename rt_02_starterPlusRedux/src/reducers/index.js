import { combineReducers } from 'redux'
import click from './click'
import check from './check'

const gameApp = combineReducers({
  click,
  check,
})

export default gameApp
