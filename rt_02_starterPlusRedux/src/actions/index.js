export const jump =  (i, squares, step) => ({
  type: "JUMP",
  i,
  squares,
  step,
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

export const check = (i, squares, xIsNext, step) => ({
  type: "CHECK",
  i,
  squares,
  xIsNext,
  step,
})
