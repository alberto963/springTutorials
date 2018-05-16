import React from 'react'
import { connect } from 'react-redux'
import './../index.css'

import Board from './../components/Board'
import { reverse } from "../actions/index"
import { click } from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return { 
    history: state.click.squares,
    stepNumber: state.stepNumber,
    ascending: state.ascending,
    xIsNext: state.xIsNext,
    winSequence: state.winSequence,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reverse,
    click,
  }
}
class Game extends React.Component {   
  handleReverse() {
    this.props.reverse() // Relevant Redux part!!
  }

  handleClick(i) {
    this.props.click(i) // Relevant Redux part!!
  }
  render() {
    
    const moves = this.props.history.map((step, move) => {
      // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
      const pos = this.props.ascending ? move : this.props.history.length - move - 1 
      const desc = pos ? 'Go to move #' + pos :'Go to game start'
      const location = pos ? 'Move Location col=' + (step.i % 3) + ', row=' + Math.floor(step.i/3) + ', player=' + step.squares[step.i] : ''
      const currentmove = this.props.stepNumber === move ? 'true' : 'false' // Added for improvement #2 (Bold the currently selected item in the move list.)

      return (
        <li key={move}>
          <button className="game-button" onClick={() => this.jumpTo(move)} currentmove={currentmove}>{desc}</button>
          <div>{location}</div>
        </li>
      );
    });

    // Changed for improvement #5 (When someone wins, highlight the three squares that caused the win.)
    const current = this.props.history[this.props.stepNumber];
    const winSequence = calculateWinSequence(current.squares)

    let status;
    if (winSequence) {
      status = 'Winner: ' + (!this.state.xIsNext ? 'X' : 'O')
    } else {
      // Changed for improvement #6 (When no one wins, display a message about the result being a draw.)
      const draw = this.props.ascending ? this.props.stepNumber === 9 : this.props.stepNumber === 0
      status = draw ? 'Draw!' : 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} winSequence={this.props.winSequence} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className="game-button" onClick={this.handleReverse}>Reverse</button>
          <ol>{moves}</ol>
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
