import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import StatsPanel from './containers/StatsPanel'
import StatsButtonsPanel from './containers/StatsButtonsPanel'
import StatsContainer from './containers/StatsContainer'

import './index.css'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// ========================================
ReactDOM.render(
  <Provider store={store}>
    <StatsContainer>
      <StatsButtonsPanel />
      <StatsPanel />
    </StatsContainer>
  </Provider>,
  document.getElementById('root')
)
