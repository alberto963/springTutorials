export const jumpTo = step => ({
  type: "JUMP_TO",
  step
})

export const reverse = () => ({
  type: "REVERSE"
})

export const click = (i, status) => ({
  type: "CLICK",
  i,
  status,
})

export const check = (i, squares, xIsNext) => ({
  type: "CHECK",
  i,
  squares,
  xIsNext,
})
