import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'

//import {
//    addTodo,
//    toggleTodo,
//    setVisibilityFilter,
//    VisibilityFilters
//  } from './actions'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store)
console.log(store.getState())

//const unsubscribe = store.subscribe(() => {
//  console.log('Listener on store - state=')
//  console.log(store.getState())
//})
//
//// Dispatch some actions
//store.dispatch(addTodo('Learn about actions'))
//store.dispatch(addTodo('Learn about reducers'))
//store.dispatch(addTodo('Learn about store'))
//store.dispatch(toggleTodo(0))
//store.dispatch(toggleTodo(1))
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
//// Stop listening to state updates
//unsubscribe()

render(
		/*
		 * The option we are using here is a special React Redux component called <Provider>.
		 * It magically make the store available to all container components in the application without passing it explicitly.
		 *  You only need to use it once when you render the root component:
		 */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
