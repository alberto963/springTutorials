const actionCreator = (type, payload) => ({ type, payload })
export const GET_DATA = 'GET_DATA'
export const SET_DATA = 'SET_DATA'

const URL = 'https://jsonplaceholder.typicode.com/todos/'
const getData = (id, panel) => actionCreator(GET_DATA, {id, panel})
const setData = (json, panel) => actionCreator(SET_DATA, {json, panel})
export const getDataAsync = (id, panel) => dispatch => {
  dispatch(getData(id, panel))
  return fetch(URL + id ).then(r => r.json()).then(json => dispatch(setData(json, panel)))
}

// Only for reference
export const asyncTimeout = (id, panel) => {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(actionCreator(GET_DATA, {id, panel}))
    }, 1000)
  }
}
