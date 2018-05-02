import { combineReducers } from 'redux'
import handleClick from './handleClick'
import jumpTo from './jumpTo'
import reverse from './reverse'

const gameApp = combineReducers({
  handleClick,
  jumpTo,
  reverse,
})

export default gameApp
