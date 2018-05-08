// src/js/reducers/index.js

const initialState = {
  list: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ELEM':
    return { ...state, list: [...state.list, action.payload] }
    default:
      return state;
  }
}

export default rootReducer;