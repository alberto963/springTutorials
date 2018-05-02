const jumpTo = (state = [{
  history: [{
    squares: Array(9).fill(null),
    i : null,
  }],
  ascending: true,   // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
  xIsNext: true,
  stepNumber: 0,
  winSequence: null,
}], action) => {
      
  switch (action.type) {
    case 'JUMP_TO':
    const step = action.step
    const current = state.history[step];
    const squares = current.squares.slice()
      return {
        ...state,
          stepNumber: step,
          xIsNext: (step % 2) === 0,
          winSequence : calculateWinSequence(squares),
      }
    default:
      return state
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

export default jumpTo
