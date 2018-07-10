// src/actions/index.js
export const normalize = data => ({ type: "NORMALIZE", payload: data })
export const load = (data, structs) => ({ type: "LOAD", payload: {data, structs} })
export const reload = data => ({ type: "RELOAD", payload: data })
export const add = data => ({ type: "ADD", payload: data })
export const remove = data => ({ type: "REMOVE", payload: data })
export const modify = data => ({ type: "MODIFY", payload: data })
export const x = x => ({ type: "X", payload: x })
export const y = y => ({ type: "Y", payload: y })
export const xl = x => ({ type: "XL", payload: x })
export const yl = y => ({ type: "YL", payload: y })