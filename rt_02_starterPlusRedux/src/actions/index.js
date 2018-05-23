export const jumpTo = step => ({
  type: "JUMP_TO",
  step
})

export const reverse = () => ({
  type: "REVERSE"
})

export const click = (i, stepNumber, status) => ({
  type: "CLICK",
  i,
  stepNumber,
  status,
})

export const check = (i, squares, xIsNext) => ({
  type: "CHECK",
  i,
  squares,
  xIsNext,
})
