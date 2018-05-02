const reverse = (state, action) => {
      
  switch (action.type) {
    case 'REVERSE':
      return {
        ...state,
        history: state.history.reverse(),
        stepNumber: state.history.length - state.stepNumber - 1,
        ascending: !state.ascending,
      }
    default:
      return state
  }
}

export default reverse
