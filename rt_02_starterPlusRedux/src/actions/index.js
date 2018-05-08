export const jumpTo = (step) => ({
  type: 'JUMP_TO',
  step,
})

export const reverse = () => ({
  type: 'REVERSE',
})

export const click = (i) => ({
  type: 'CLICK',
  i,
})