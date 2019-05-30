import { put, takeEvery, all } from 'redux-saga/effects'
import { GET_DATA_P1, GET_DATA_P2, setDataP1, setDataP2 } from './actions'

// Our worker Saga: will perform the async get data task
export function* getDataP1(action) {
  const {id} = action.meta

  const json = yield fetch('https://jsonplaceholder.typicode.com/todos/'+ id ).then(response => response.json())

  yield put(setDataP1(json))
}

export function* getDataP2(action) {
  const {id} = action.meta

  const json = yield fetch('https://jsonplaceholder.typicode.com/todos/'+ id ).then(response => response.json())

  yield put(setDataP2(json))
}

// Our watcher Saga: spawn a new getData task on each GET_DATA
export function* watchGetData() {
  // takeEvery, a helper function provided by redux-saga, to listen for dispatched GET_DATA actions and run getData each time.
  yield takeEvery(GET_DATA_P1, getDataP1)
  yield takeEvery(GET_DATA_P2, getDataP2)
}

// Notice how we now only export the rootSaga: single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchGetData()
  ])
}
