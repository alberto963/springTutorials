import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Routes from './components/Routes'
import thunk from 'redux-thunk'

const conf = ['users', 'posts', 'comments', 'todos']

// Init Redux with thunk
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

const App =
  <Provider store={store}>
    <Routes conf={conf} />
  </Provider>

ReactDOM.render(App, document.getElementById('root'))