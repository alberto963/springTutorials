import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square(props) {
  let winner = props.winSequence && props.winSequence.includes(props.num)
  winner = winner ? winner.toString() : 'false'
  return (
    <button className="square-row" onClick={props.onClick} >
      <div>
        <span className="num">{props.num}</span>      
        <span className="square" winner={winner}>{props.value}</span>
      </div>
    </button>
  )
}

class Row extends React.Component {
  // Refactored for improvement #3: Rewrite Board to use two loops to make the squares instead of hardcoding them..

  render () {

    const ri = this.props.r

    const squares = this.props.squares.map((square, i) => {
      return (<Square key={i} num={ri + i} value={square} onClick={() => this.props.onClick(ri + i)} winSequence={this.props.winSequence}/>)
    })

    return (
      <div className="board-row">
        {squares}
      </div>
    )
  }
}

class Board extends React.Component {
 // Refactored for improvement #3: Rewrite Board to use two loops to make the squares instead of hardcoding them..
  render() {

    const rows = Array(3).fill(null).map((row, r) => {
      const ri = r * 3
      return (<Row key={r} r={ri} squares={this.props.squares.slice(ri, ri + 3)} onClick={this.props.onClick} winSequence={this.props.winSequence} />)
    })

    return (
      <div>
        {rows}
      </div>
    )
  }
}

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
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice()
    if (calculateWinSequence(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'   

    
    this.setState({
      history: history.concat([{
      squares: squares,
      i : i, // Added for improvement #1: Display the location for each move in the format (col, row) in the move history list.
      }]), 
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      winSequence : calculateWinSequence(squares), // Added for improvement #5 (When someone wins, highlight the three squares that caused the win.)
    })
  }

  jumpTo(step) {
    // Changed for improvement #5 (When someone wins, highlight the three squares that caused the win.)
    const current = this.state.history[step];
    const squares = current.squares.slice()
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      winSequence : calculateWinSequence(squares),
    });
  }

  // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
  reverse() {
    this.setState({
      history: this.state.history.reverse(),
      stepNumber: this.state.history.length - this.state.stepNumber - 1,
      ascending: !this.state.ascending,
    });
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
