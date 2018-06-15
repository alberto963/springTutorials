// src/js/actions/index.js
export const incNum = num => ({ type: "INC_NUM", payload: num })
export const setNum = (id, num) => ({ type: "SET_NUM", payload: {id: id, num: num}})
