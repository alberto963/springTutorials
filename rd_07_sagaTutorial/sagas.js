import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000) // Generator functions yield objects to the redux-saga middleware
  yield put({ type: 'INCREMENT' }) // put instructs the middleware to dispatch an INCREMENT action. put is an Effect.
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  // takeEvery, a helper function provided by redux-saga, to listen for dispatched INCREMENT_ASYNC actions and run incrementAsync each time.
}

// notice how we now only export the rootSaga

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}