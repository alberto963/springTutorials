const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
}

const click = (state=initialState, action) => {
      
  switch (action.type) {
    case 'CLICK':
    const s={...state}
    s.squares[action.i]=state.xIsNext ? 'X' : 'O'
     return {
        ...state, squares: s.squares,  
        xIsNext: !state.xIsNext, 
      }

    default:
      return state
  }
}

export default click
