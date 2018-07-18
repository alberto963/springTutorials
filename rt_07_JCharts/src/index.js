import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import StatsPanel from './containers/StatsPanel'
import StatsButtonsPanel from './containers/StatsButtonsPanel'
import StatsContainer from './containers/StatsContainer'
import { generateDataset } from './reducers/dataset'

import './index.css'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const testData = generateDataset('', 7)

const testStructs = [
  { title: 'pie1', table: 'UnivariateFrequency', type: 'pie', attributes: ['f1',] },
  { title: 'bar1', table: 'UnivariateFrequency', type: 'bar', attributes: ['f2',] },
  { title: 'bar2', table: 'UnivariateFrequency', type: 'hbar', attributes: [ 'f2', ] },
  { title: 'pie2', table: 'UnivariateFrequency', type: 'pie1', attributes: ['f2'] },

]

// ========================================
ReactDOM.render(
  <Provider store={store}>
    <StatsContainer data={testData} structs={testStructs}>
      <StatsButtonsPanel />
      <StatsPanel />
    </StatsContainer>
  </Provider>,
  document.getElementById('root')
)
