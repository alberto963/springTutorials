// REACT
import React from 'react'
import ReactDOM from 'react-dom'

// REDUX
import { createStore } from 'redux'

// SPECIFIC
import Counter from './components/Counter'
import Simple from './components/Simple'
import count from './reducers'

// Begin---

// Create store, quoting count reducer
const store = createStore(count)

// Get root element from HTML document
const rootEl = document.getElementById('root')

// Define of render function, giving an HTML artifact and the root element to install it on
const render = () => ReactDOM.render(
		<div><Simple value={"Albert!"} />
             <Counter value={store.getState()} 
                      onIncrement={() => store.dispatch({ type: 'INCREMENT' })} 
                      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}/>
        </div>,
  rootEl
)

// Call of render
render()

// Associate render to store (to trigger all event chain updates)
store.subscribe(render)
