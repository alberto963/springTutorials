import uuidv1 from "uuid"

const initialState = {
  list:  [
    { title: "React Redux Tutorial for Beginners", id: uuidv1() },
    { title: "How to use Redux with React", id: uuidv1() }
  ],
  list2:  [
  ]
}

const elems = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ELEM':
      action.payload.title += (state.list.length + 1)
      return { ...state, list: [...state.list, action.payload] }
    case 'ADD_ELEM2':
      action.payload.title += (state.list2.length + 1)
      return { ...state, list2: [...state.list2, action.payload] }
    default:
      return state
  }
}

export default elems