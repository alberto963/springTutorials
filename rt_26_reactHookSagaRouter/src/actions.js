const actionCreator = (type, payload, meta) => ({ type, payload, meta })
export const GET_DATA = 'GET_DATA'
export const SET_DATA = 'SET_DATA'

export const getData = (id, panel) => actionCreator(GET_DATA, {id, panel}, {id})

export const setData = (json, panel) => actionCreator(SET_DATA, {json, panel}, null)
