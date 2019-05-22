import { combineReducers } from 'redux'
import { GET_DATA, SET_DATA } from './actions'

const options = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA:
    const {id} = action.payload
      return {...state, id}
    default:
      return state
  }
}

const data = (state = {}, action) => {
  switch (action.type) {
    case SET_DATA:
      const {json} = action.payload
      return {...state, json}
    default:
      return state
  }
}

const reducer = combineReducers({
  options,
  data,
})

export default reducer
