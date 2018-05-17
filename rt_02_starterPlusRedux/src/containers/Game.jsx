import React from 'react'
import { connect } from 'react-redux'
import './../index.css'

import Board from './../components/Board'
import { reverse } from "../actions/index"
import { click } from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return { 
    squares: state.click.squares,
    xIsNext: state.click.xIsNext,
  }
}

const mapDispatchToProps = {
  click,
}

class Game extends React.Component {   

  handleClick(i) {
    this.props.click(i) // Relevant Redux part!!
  }

  render() {

    const winSequence = calculateWinSequence(this.props.squares)

    let status;
    if (winSequence) {
      status = 'Winner: ' + (!this.props.xIsNext ? 'X' : 'O')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.props.squares} click={(i) => this.props.click(i)} />
        </div>
      </div>
    )
  }
}

// Refactored for improvement #5 (When someone wins, highlight the three squares that caused the win.)
function calculateWinSequence(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i]
    }
  }
  return null
}

// export default Game
export default connect(mapStateToProps, mapDispatchToProps)(Game)
