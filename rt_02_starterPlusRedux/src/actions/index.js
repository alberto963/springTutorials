export const jump = step => ({
  type: "JUMP",
  step
})

export const reverse = () => ({
  type: "REVERSE"
})

export const click = (i, step, status) => ({
  type: "CLICK",
  i,
  step,
  status,
})

export const check = (i, squares, xIsNext) => ({
  type: "CHECK",
  i,
  squares,
  xIsNext,
})
