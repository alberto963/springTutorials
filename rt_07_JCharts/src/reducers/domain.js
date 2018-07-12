const domain = (state = {
  x: 0,
  y: 30,
  w: -1,
  h: 4,
  xl: 100,
  yl: 10,
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

    case "W":
      return {
        ...state,
        w: action.payload
      }

    case "H":
      return {
        ...state,
        h: action.payload
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