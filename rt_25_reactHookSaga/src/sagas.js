import { put, takeEvery, all } from 'redux-saga/effects'
import { GET_DATA, setData, setTree } from './actions'

// Our worker Saga: will perform the async get data task
export function* getData(action) {
  const {id} = action.meta

  const json = yield fetch('https://jsonplaceholder.typicode.com/todos/'+ id ).then(response => response.json())
  const {title=''} = json

  const list2Tree = list => {
   
    const root = []
    let r = root
    list.forEach( (v, i) => {
      r.push({v, i, child: []})
      r=r[0].child
    })

    return root
  }

  const tree = list2Tree(title.split(' '))
  // console.info('tree=', tree)

  yield put(setData(json))
  yield put(setTree(tree))
}

// Our watcher Saga: spawn a new getData task on each GET_DATA
export function* watchGetData() {
  // takeEvery, a helper function provided by redux-saga, to listen for dispatched GET_DATA actions and run getData each time.
  yield takeEvery(GET_DATA, getData)
}

// Notice how we now only export the rootSaga: single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchGetData()
  ])
}
