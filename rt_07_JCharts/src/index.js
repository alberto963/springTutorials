import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import StatsPanel from './containers/StatsPanel'
import StatsButtonsPanel from './containers/StatsButtonsPanel'

import './index.css'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// ========================================
ReactDOM.render(
  <Provider store={store}>
    <div className='panel'>
      <StatsButtonsPanel />
      <StatsPanel />
    </div>
  </Provider>,
  document.getElementById('root')
)
