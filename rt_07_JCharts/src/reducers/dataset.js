const generateDataset = (dataSet, n) => { 
  return dataSet === 'data0' ? [
    {id: 0, f1: 0, f2: 'A', f3: true},
    {id: 1, f1: 1, f2: 'B', f3: true},
    {id: 2, f1: 2, f2: 'B', f3: true},
    {id: 3, f1: 3, f2: 'C', f3: true},
    {id: 4, f1: 4, f2: 'C', f3: true},
    {id: 5, f1: 0, f2: 'C', f3: true},
    {id: 6, f1: 1, f2: 'C', f3: true},
    {id: 7, f1: 2, f2: 'D', f3: true},
    {id: 8, f1: 3, f2: 'D', f3: true},
    {id: 9, f1: 4, f2: 'D', f3: false},
    {id: 10, f1: 1, f2: 'D', f3: false},
    {id: 11, f1: 2, f2: 'D', f3: false},
    {id: 12, f1: 3, f2: 'D', f3: false},
    {id: 13, f1: 4, f2: 'D', f3: false},
    {id: 14, f1: 0, f2: 'D', f3: false},
    {id: 15, f1: 1, f2: 'D', f3: false},
    {id: 16, f1: 0, f2: 'A', f3: true},
    {id: 17, f1: 1, f2: 'B', f3: true},
    {id: 18, f1: 2, f2: 'B', f3: true},
    {id: 19, f1: 3, f2: 'C', f3: true},
    {id: 20, f1: 4, f2: 'C', f3: true},
    {id: 21, f1: 0, f2: 'C', f3: true},
    {id: 22, f1: 1, f2: 'C', f3: true},
    {id: 23, f1: 2, f2: 'D', f3: true},
    {id: 24, f1: 3, f2: 'D', f3: true},
    {id: 25, f1: 4, f2: 'D', f3: false},
    {id: 26, f1: 0, f2: 'D', f3: false},
    {id: 27, f1: 1, f2: 'D', f3: false},
    {id: 28, f1: 2, f2: 'E', f3: false},
    {id: 29, f1: 3, f2: 'E', f3: false},
    {id: 30, f1: 4, f2: 'E', f3: false},
    {id: 31, f1: 0, f2: 'E', f3: false},
  ] :
    Array(n).fill(null).map((row, i) => {
      return {id: i, f1: i%97, f2: i%2 === 0 ? 'A' : i%3=== 0 ? 'B' : i%5=== 0 ? 'C' : i%7=== 0 ? 'D' : 'E', f3: i%2 === 0}
    })
}

const data = generateDataset('data1', 10)
const initialState = { data }

const dataset = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":

      return {
        ...state,
        data: state.data.map(row => { return { ...row, f1: row.f1 + 1 }})
      }

    default:
      return state
  }
}

export default dataset
