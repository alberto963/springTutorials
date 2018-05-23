const initialState = {
  status: null,
  winSequence: null,
}

const check = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK":

//      if (state.status || action.squares[action.i] ) {
//        return state;
//      }

      const squares = [...action.squares]
      squares[action.i] = action.squares[action.i] ? squares[action.i] : action.xIsNext ? "X" : "O";

      const winSequence = calculateWinSequence(squares);
      let status = winSequence ? "Winner: " + (action.xIsNext ? "X" : "O") : action.step === 8 ? 'Draw!' : ''

      return {
        ...state,
        status: status,
        winSequence: winSequence,
      }

    default:
      return state;
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export default check;
