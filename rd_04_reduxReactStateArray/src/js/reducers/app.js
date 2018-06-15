const app = (state = [
  { id: 0, initial: 0, discriminator: 1 },
  { id: 1, initial: 1, discriminator: 0 },
  { id: 2, initial: 2, discriminator: 1 },
  { id: 3, initial: 0, discriminator: 0 },
  { id: 4, initial: 1, discriminator: 1 },
], action) => {
  switch (action.type) {
    case 'INC_NUM':
      return state.map(f => f.discriminator === 0 ? { ...f, initial: f.initial + action.payload } : f)
    case 'SET_NUM':
      return state.map(f => f.id === action.payload.id ? { ...f, initial: action.payload.num } : f)
    default:
      return state
  }
}

export default app