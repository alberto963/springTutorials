const actionCreator = (type, payload, meta) => ({ type, payload, meta })
export const GET_DATA_P1 = 'GET_DATA_P1'
export const GET_DATA_P2 = 'GET_DATA_P2'
export const SET_DATA_P1 = 'SET_DATA_P1'
export const SET_DATA_P2 = 'SET_DATA_P2'

export const getDataP1 = id => {
  const payload = {id}
  const meta = {id}

  return actionCreator(GET_DATA_P1, payload, meta)
}

export const getDataP2 = id => {
  const payload = {id}
  const meta = {id}

  return actionCreator(GET_DATA_P2, payload, meta)
}

export const setDataP1 = json => {
  const payload = {jsonP1: json}

  return actionCreator(SET_DATA_P1, payload, null)
}
export const setDataP2 = json => {
  const payload = {jsonP2: json}

  return actionCreator(SET_DATA_P2, payload, null)
}
