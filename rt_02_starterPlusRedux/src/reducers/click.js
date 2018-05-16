const initialState = {
  squares: Array(9).fill(null),
  i : null,
  // ascending: true,   // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
  xIsNext: true,
  stepNumber: 0,
  winSequence: null,
}

const click = (state =initialState, action) => {
      
  switch (action.type) {
    case 'CLICK':

     return {
        ...state,
        history: {
          i : action.i, // Added for improvement #1: Display the location for each move in the format (col, row) in the move history list.
          }, 
//          stepNumber: history.length,
//          xIsNext: !state.xIsNext,
 //         winSequence : calculateWinSequence(squares), // Added for improvement #5 (When someone wins, highlight the three squares that caused the win.)
      }

      // const history = state.history.slice(0, state.stepNumber + 1);
      // const current = history[history.length - 1];
      // const squares = current.squares.slice()

      // if (calculateWinSequence(squares) || squares[action.i]) {
      //   return state
      // }

      // squares[action.i] = state.xIsNext ? 'X' : 'O'   

      // return {
      //   ...state,
      //   history: history.concat([{
      //     squares: squares,
      //     i : action.i, // Added for improvement #1: Display the location for each move in the format (col, row) in the move history list.
      //     }]), 
      //     stepNumber: history.length,
      //     xIsNext: !state.xIsNext,
      //     winSequence : calculateWinSequence(squares), // Added for improvement #5 (When someone wins, highlight the three squares that caused the win.)
      // }
    default:
      return state
  }
}

export default click
