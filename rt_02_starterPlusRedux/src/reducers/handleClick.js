const handleClick = (state, action) => {
      
  switch (action.type) {
    case 'HANDLE_CLICK':
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice()
      if (calculateWinSequence(squares) || squares[action.i]) {
        return state
      }
      squares[i] = state.xIsNext ? 'X' : 'O'   

      return {
        ...state,
        history: history.concat([{
          squares: squares,
          i : action.i, // Added for improvement #1: Display the location for each move in the format (col, row) in the move history list.
          }]), 
          stepNumber: history.length,
          xIsNext: !state.xIsNext,
          winSequence : calculateWinSequence(squares), // Added for improvement #5 (When someone wins, highlight the three squares that caused the win.)
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

export default handleClick
