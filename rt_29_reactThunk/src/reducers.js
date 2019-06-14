import { combineReducers } from 'redux'
import { GET_DATA, SET_DATA } from './actions'

const options = (state = {}, {type, payload}) => {
  switch (type) {
    case GET_DATA:
      const {id, panel} = payload
      return {...state, [panel]: {id}}
    default:
      return state
  }
}

const decode = (json, panel) => {
  switch(panel) {
   case 'users':
    return json.name
    case 'posts':
    return json.body
    case 'comments':
    return json.email
    case 'todos':
    return json.title
   default:
     return ''
  }
}

const data = (state = {}, {type, payload}) => {
  switch (type) {
    case SET_DATA:
      const {json, panel} = payload
      return {...state, [panel]: {json, card: decode(json, panel)}}
    default:
      return state
  }
}

const reducer = combineReducers({
  options,
  data,
})

export default reducer
