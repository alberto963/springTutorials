export const jumpTo = (step) => ({
  type: 'JUMP_TO',
  step,
})

export const reverse = () => ({
  type: 'REVERSE',
})

export const handleClick = (i) => ({
  type: 'HANDLE_CLICK',
  i,
})