const initialState = {
  status: null,
  xIsNext: true,
}

const click = (state=initialState, action) => {
      
  switch (action.type) {
    case 'CLICK':

     return {
        ...state,
        status: !state.xIsNext, 
      }

    default:
      return state
  }
}

export default click
