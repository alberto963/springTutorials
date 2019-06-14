const actionCreator = (type, payload) => ({ type, payload })
export const GET_DATA = 'GET_DATA'
export const SET_DATA = 'SET_DATA'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'
const _getData = (id, panel) => actionCreator(GET_DATA, {id, panel})
const setData = (json, panel) => actionCreator(SET_DATA, {json, panel})
export const getData = (id, panel) => dispatch => {
  dispatch(_getData(id, panel))
  // setTimeout(() => dispatch(setData({}, panel)), 1000)
  return fetch(BASE_URL + panel + '/' + id ).then(r => r.json()).then(json => dispatch(setData(json, panel)))
}

// Only for reference
// eslint-disable-next-line 
const asyncTimeout = (id, panel) => {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(actionCreator(GET_DATA, {id, panel}))
    }, 1000)
  }
}
