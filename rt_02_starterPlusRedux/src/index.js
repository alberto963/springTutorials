import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Game from './containers/Game'
import GameInfo from './containers/GameInfo'
import GameMoves from './containers/GameMoves'
import reducer from './reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <div className="game">
      <div>
        <Game />
      </div>
      <div>
        <GameInfo />
      </div>
      <div>
        <GameMoves />
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
)
