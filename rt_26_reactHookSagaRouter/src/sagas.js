import { put, takeEvery, all } from 'redux-saga/effects'
import { GET_DATA, setData } from './actions'

// Our worker Saga: will perform the async get data task
function* getData(action) {
  const {panel} = action.payload
  const {id} = action.meta

  const json = yield fetch('https://jsonplaceholder.typicode.com/todos/'+ id).then(response => response.json())

  yield put(setData(json, panel))
}

// Our watcher Saga: spawn a new getData task on each GET_DATA
function* watchGetData() {
  // takeEvery, a helper function provided by redux-saga, to listen for dispatched GET_DATA actions and run getData each time.
  yield takeEvery(GET_DATA, getData)
}

// Notice how we now only export the rootSaga: single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchGetData()
  ])
}
