import uuidv1 from "uuid"

const initialState = {
  n:  0
}

const numbers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ELEM':
      action.payload.title += (state.list.length + 1)
      return { ...state, state.n: state.n:++ }
    default:
      return state
  }
}

export default numbers