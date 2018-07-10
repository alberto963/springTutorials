const domain = (state = {
  x: 0,
  y: 0,
  xl: 0,
  yl: 0
}, action) => {

  switch (action.type) {
    case "X":
      return {
        ...state,
        x: action.payload
      }

    case "Y":
      return {
        ...state,
        y: action.payload
      }
    case "XL":
      return {
        ...state,
        xl: action.payload
      }

    case "YL":
      return {
        ...state,
        yl: action.payload
      }
    default:
      return state
  }
}

export default domain