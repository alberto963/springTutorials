const actionCreator = (type, payload) => ({ type, payload })
export const GET_DATA = 'GET_DATA'
export const SET_DATA = 'SET_DATA'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'
const _getData = (id, panel) => actionCreator(GET_DATA, {id, panel})
const setData = (json, panel) => actionCreator(SET_DATA, {json, panel})

export const getData = (id, panel) => dispatch => {
  dispatch(_getData(id, panel))
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

const timeoutPromise = (ms, promise) => new Promise((resolve, reject) => {

  const timeoutId = setTimeout(() => {
    reject(new Error('Timeout'))
  }, ms)
  
  promise.then(
    res => {
      clearTimeout(timeoutId)
      resolve(res)
    },
    err => {
      clearTimeout(timeoutId)
      reject(err)
    }
  )
})

// Only for reference
// eslint-disable-next-line 
const getDataWithTimeout = url => dispatch => {
  dispatch(_getData(url))
  timeoutPromise(5000, fetch(url).then(response => response.json()).then(json => dispatch(getDataSuccess(json)))
  .catch(error => dispatch(getDataFailed(error))))
}

const getDataSuccess = json => console.log(json)
const getDataFailed = error => console.error(error)