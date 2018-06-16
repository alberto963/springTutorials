const data = [
  { f0: 0, f1: 1, f2: 2, f3: 1, f4: 2, },
]

const infos = [
  { initial: 'f0', discriminator: 1 },
  { initial: 'f1', discriminator: 0 },
  { initial: 'f2', discriminator: 1 },
  { initial: 'f3', discriminator: 0 },
  { initial: 'f4', discriminator: 1 },
]

const mapper = (data, infos) => infos.map((info, index) => ({ ...info, id: index, initial: data[0][info.initial] }))

const app = (state = mapper(data, infos), action) => {
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