import { combineReducers } from 'redux'
import { GET_DATA, SET_DATA, DELAY } from './actions'
import { decode } from './conf'

const options = (state = {}, {type, payload}) => {
  switch (type) {
    case GET_DATA:
    case SET_DATA:
    case DELAY:
      const {id, panel} = payload
      return type === GET_DATA ?
                {...state, [panel]: {id, loading: true, timeout: false}} :
              type === SET_DATA ? 
                {...state, [panel]: {...state[panel], loading: false}} :
                {...state, [panel]: {...state[panel], timeout: true}}
    default:
      return state
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
