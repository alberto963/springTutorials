// src/js/store/index.js
import { createStore } from "redux"
import rootReducer from "../reducers/index"

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store)
console.log(store.getState())

export default store