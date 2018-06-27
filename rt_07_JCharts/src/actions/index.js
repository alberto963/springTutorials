// src/actions/index.js
export const normalize = data => ({ type: "NORMALIZE", payload: data })
export const load = (data, structs) => ({ type: "LOAD", payload: {data, structs}})
export const reload = data => ({ type: "RELOAD", payload: data })
export const add = data => ({ type: "ADD", payload: data })
export const remove = data => ({ type: "REMOVE", payload: data })
export const modify = data => ({ type: "MODIFY", payload: data })
