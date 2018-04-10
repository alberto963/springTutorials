import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square(props) {
  return (
    <button className="square-row" onClick={props.onClick}>
      <div>
          <span className="num">{props.num}</span>      
          <span className="square">{props.value}</span>      
        </div>
    </button>
  )
}

class Row extends React.Component {
  // Refactored for improvement #3: Rewrite Board to use two loops to make the squares instead of hardcoding them..

  render () {

    const ri = this.props.r

    const squares = this.props.squares.map((square, i) => {
      return (<Square num={ri + i} 
        value={square} 
        onClick={() => this.props.onClick(ri + i)} />)
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

    const rows = Array(3).fill(null).map((col, r) => {
      const ri =r * 3
      return (<Row r={ri} squares={this.props.squares.slice(ri, ri + 3)} onClick={this.props.onClick} />)
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
    }
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
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
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
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
      const currentMove = stepNumber === move ? 'true' : 'false' // Added for improvement #2 (Bold the currently selected item in the move list.)

      return (
        <li key={move}>
          <button className="game-button" onClick={() => this.jumpTo(move)} currentMove={currentMove}>{desc}</button>
          <div>{location}</div>
        </li>
      );
    });

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
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

function calculateWinner(squares) {
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
      return squares[a]
    }
  }
  return null
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
