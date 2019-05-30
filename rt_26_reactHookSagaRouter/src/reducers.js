import { combineReducers } from 'redux'
import { GET_DATA_P1, GET_DATA_P2, SET_DATA_P1, SET_DATA_P2 } from './actions'

const options = (state = {idP1: 1, idP2: 1}, {type, payload}) => {
  switch (type) {
    case GET_DATA_P1:
    case GET_DATA_P2:
      const {id} = payload
      return type === GET_DATA_P1 ? {...state, idP1: id} : {...state, idP2: id} 
    default:
      return state
  }
}

const data = (state = {jsonP1: {}, jsonP2: {}}, {type, payload}) => {
  switch (type) {
    case SET_DATA_P1:
      const {jsonP1} = payload
      return {...state, jsonP1}
    case SET_DATA_P2:
      const {jsonP2} = payload
      return {...state, jsonP2}
    default:
      return state
  }
}

const reducer = combineReducers({
  options,
  data,
})

export default reducer
