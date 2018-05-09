// src/js/reducers/index.js
import uuidv1 from "uuid"

const initialState = {
  list:  [
    { title: "React Redux Tutorial for Beginners", id: uuidv1() },
    { title: "How to use Redux with React", id: uuidv1() }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ELEM':
    action.payload.title += (state.list.length + 1)
    return { ...state, list: [...state.list, action.payload] }
    default:
      return state
  }
}

export default rootReducer