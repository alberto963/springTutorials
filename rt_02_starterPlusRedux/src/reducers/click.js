const initialState = {
  history: [{
    squares: Array(9).fill(null),
    i: null,
  }],
  squares: Array(9).fill(null),
  xIsNext: true,
}

const click = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":

      if (action.status || state.squares[action.i]) {
        return state
      }

      const squares = [...state.squares]
      squares[action.i] = state.xIsNext ? "X" : "O"

      /*
       * Alternative way 1
       */
      // const s1=[...state.squares, ]
      // s1[action.i]=state.xIsNext ? 'X' : 'O'

      return {
        ...state,
        history: [...state.history,
        { squares: squares, i: action.i }],
        squares: squares,
        /*
         * Alternative way 1
         */
        // ...state, squares: s1,
        xIsNext: !state.xIsNext,
      }

    default:
      return state
  }
}

export default click
