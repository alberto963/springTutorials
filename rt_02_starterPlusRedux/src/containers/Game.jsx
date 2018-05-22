import React from "react"
import "./../index.css"

import Board from "./../components/Board"
class Game extends React.Component {
  render() {
    return (
      <div className="game-board">
        <Board />
      </div>
    )
  }
}

export default Game
