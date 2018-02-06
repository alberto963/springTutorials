import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

console.log(store)
console.log(store.getState())

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
