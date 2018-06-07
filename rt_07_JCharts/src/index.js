import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import StatsPanel from './containers/StatsPanel'

import './index.css'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const struct = [
//   { title: 'bar2-g', table: 'UnivariateFrequency', type: 'bar', attributes: [ { attr: 'f2', category: [['A', 'B'], ['C','D']]}] },
// ]

// const struct = [
//   { title: 'pie2-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]}, ] }, 
// ]

const struct = [
  { title: 'pie1', table: 'UnivariateFrequency', type: 'pie', attributes: ['f1', 'f2', 'f3'] }, 
  { title: 'bar1', table: 'UnivariateFrequency', type: 'bar', attributes: ['f1', 'f2', 'f3'] },
  { title: 'pie2-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[0, 1], [3, 4]]},
                                                                             { attr: 'f2', category: [['A', 'B'], ['C','D']]},
                                                                              'f3'] }, 
  { title: 'bar2-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [[0, 1], [3, 4]]},
                                                                             { attr: 'f2', category: [['A', 'B'], ['C','D']]},
                                                                              'f3'] },
  { title: 'pie3-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]}, ] }, 
  { title: 'bar3-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]}, ] }, 

]

// ========================================
ReactDOM.render(
  <Provider store={store}>
    <div className='main-panel'>
      <StatsPanel struct={struct} />
    </div>
  </Provider>,
  document.getElementById('root')
)
