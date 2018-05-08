import { combineReducers } from 'redux'
import click from './click'
import jumpTo from './jumpTo'
import reverse from './reverse'

const gameApp = combineReducers({
  click,
  jumpTo,
  reverse,
})

export default gameApp
