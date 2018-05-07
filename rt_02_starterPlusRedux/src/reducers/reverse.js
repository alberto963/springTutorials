const reverse = (state=[{
  ascending: true,   // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
 }], action) => {
      
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
