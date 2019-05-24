const actionCreator = (type, payload, meta) => ({ type, payload, meta })
export const GET_DATA = 'GET_DATA'
export const SET_DATA = 'SET_DATA'
export const SET_TREE = 'SET_TREE'

export const getData = (id) => {
  const payload = {id}
  const meta = {id}

  return actionCreator(GET_DATA, payload, meta)
}

export const setData = json => {
  const payload = {json}

  return actionCreator(SET_DATA, payload, null)
}

export const setTree = tree => {
  const payload = {tree}

  return actionCreator(SET_TREE, payload, null)
}