const initialState = {
  step: 0,
}

const jump = (state = initialState, action) => {
  switch (action.type) {
    case "JUMP":

      return {
        ...state,
        step: action.step,
      }

    default:
      return state
  }
}

export default jump
