const initialState = {
  num:  0
}

const numbers = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_NUM':
      const num = state.num
      return { ...state, num: num + action.payload }
    case 'SET_NUM':
    // TODO get the list length (from payload?)
    const num2 = state.num
    return { ...state, num: num2 + action.payload }
    default:
      return state
  }
}

export default numbers