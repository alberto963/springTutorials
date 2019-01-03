import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { withState } from 'recompose'
import StatsPanel from './StatsPanel'

const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const withCounter = withState('c' , 'getC', 0)

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <p><center>Experiments on <code>css flex</code> for panel development.</center></p>
        </header>
        <StatsPanel datasets={['d0', 'd1', 'd2', 'd3', 'd4']} />
      </div>
    </Provider>
  )
}

export default withCounter(App)
