const initialState = {
  num:  0,
}

const numbers = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_NUM':
      const num = state.num
      return { ...state, num: num + action.payload }
    case 'SET_NUM':
    // We get the list length from payload
    return { ...state, num: action.payload + 1 }
    default:
      return state
  }
}

export default numbers