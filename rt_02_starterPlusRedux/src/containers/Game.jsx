import React from 'react'
import ReactDOM from 'react-dom'
import './../index.css'

import Board from './../components/Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        i : null,
      }],
      ascending: true,   // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
      xIsNext: true,
      stepNumber: 0,
      winSequence: null,
    }
  }
  render() {
    const history = this.state.history;
    const stepNumber = this.state.stepNumber;
    
    const moves = history.map((step, move) => {
      // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
      const pos = this.state.ascending ? move : history.length - move - 1 
      const desc = pos ? 'Go to move #' + pos :'Go to game start'
      const location = pos ? 'Move Location col=' + (step.i % 3) + ', row=' + Math.floor(step.i/3) + ', player=' + step.squares[step.i] : ''
      const currentmove = stepNumber === move ? 'true' : 'false' // Added for improvement #2 (Bold the currently selected item in the move list.)

      return (
        <li key={move}>
          <button className="game-button" onClick={() => this.jumpTo(move)} currentmove={currentmove}>{desc}</button>
          <div>{location}</div>
        </li>
      );
    });

    // Changed for improvement #5 (When someone wins, highlight the three squares that caused the win.)
    const current = history[stepNumber];
    const winSequence = calculateWinSequence(current.squares);

    let status;
    if (winSequence) {
      status = 'Winner: ' + (!this.state.xIsNext ? 'X' : 'O');
    } else {
      // Changed for improvement #6 (When no one wins, display a message about the result being a draw.)
      const draw = this.state.ascending ? stepNumber === 9 : stepNumber === 0
      status = draw ? 'Draw!' : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} winSequence={this.state.winSequence} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className="game-button" onClick={() => this.reverse()}>Reverse</button>
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

export default Game