import { combineReducers } from 'redux'
import { GET_DATA, SET_DATA } from './actions'

const options = (state = {todos: {id: 1}}, {type, payload}) => {
  switch (type) {
    case GET_DATA:
      const {id, panel} = payload
      return {...state, [panel]: {id}}
    default:
      return state
  }
}

const data = (state = {todos: {}}, {type, payload}) => {
  switch (type) {
    case SET_DATA:
      const {json, panel} = payload
      return {...state, [panel]: {json}}
    default:
      return state
  }
}

const reducer = combineReducers({
  options,
  data,
})

export default reducer
