const initialState = {
  history: [{
    squares: Array(9).fill(null),
    i: null,
  }],
  xIsNext: true,
}

const click = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":

      const squares = [...state.history[action.step].squares]

      if (action.status || squares[action.i]) {
        return state
      }

      squares[action.i] = state.xIsNext ? "X" : "O"

      /*
       * Alternative way 1 (starting from state.square)
       */
      // const s1=[...state.squares, ]
      // s1[action.i]=state.xIsNext ? 'X' : 'O'

      return {
        ...state,
        history: [...state.history,
        { squares: squares, i: action.i }],

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
