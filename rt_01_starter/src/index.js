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

// eslint-disable-next-line 
function SquareOrig(props) {
  return (
    <button className="square" onClick={props.onClick}>
      <div>
          <span className="num">{props.num}</span>      
          <span>{props.value}</span>      
        </div>
    </button>
  )
}
class Board extends React.Component {
    renderSquare(i) {
    return <Square num={i} 
      value={this.props.squares[i]} 
      onClick={() => this.props.onClick(i)} />
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
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
  render() {
    const history = this.state.history;
    const stepNumber = this.state.stepNumber;
    
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start'
      const location = move ?
        'Move Location col=' + Math.floor(step.i % 3) + ', row=' + Math.floor(step.i/3) + ', player=' + step.squares[step.i] : ''
      const currentMove = stepNumber === move ? 'true' : 'false'
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
