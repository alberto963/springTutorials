const initialState = {
  step: 0,
}

const jump = (state = initialState, action) => {
  switch (action.type) {
    case "JUMP":

      if (action.squares[action.i]) {
        return state
      }

      return {
        ...state,
        step: action.step,
      }

    default:
      return state
  }
}

export default jump
