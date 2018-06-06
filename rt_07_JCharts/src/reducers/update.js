const initialState = {
  data: data,
}

const update = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":

      return {
        ...state,
      }

    default:
      return state
  }
}

export default update
