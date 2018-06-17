const generateDataset = (dataSet, n) => {
  return dataSet === 'data0' ? [
    { id: 0, f1: 0, f2: 'A', f3: true },
    { id: 1, f1: 1, f2: 'B', f3: true },
    { id: 2, f1: 2, f2: 'B', f3: true },
    { id: 3, f1: 3, f2: 'C', f3: true },
    { id: 4, f1: 4, f2: 'C', f3: true },
    { id: 5, f1: 0, f2: 'C', f3: true },
    { id: 6, f1: 1, f2: 'C', f3: true },
    { id: 7, f1: 2, f2: 'D', f3: true },
    { id: 8, f1: 3, f2: 'D', f3: true },
    { id: 9, f1: 4, f2: 'D', f3: false },
    { id: 10, f1: 1, f2: 'D', f3: false },
    { id: 11, f1: 2, f2: 'D', f3: false },
    { id: 12, f1: 3, f2: 'D', f3: false },
    { id: 13, f1: 4, f2: 'D', f3: false },
    { id: 14, f1: 0, f2: 'D', f3: false },
    { id: 15, f1: 1, f2: 'D', f3: false },
    { id: 16, f1: 0, f2: 'A', f3: true },
    { id: 17, f1: 1, f2: 'B', f3: true },
    { id: 18, f1: 2, f2: 'B', f3: true },
    { id: 19, f1: 3, f2: 'C', f3: true },
    { id: 20, f1: 4, f2: 'C', f3: true },
    { id: 21, f1: 0, f2: 'C', f3: true },
    { id: 22, f1: 1, f2: 'C', f3: true },
    { id: 23, f1: 2, f2: 'D', f3: true },
    { id: 24, f1: 3, f2: 'D', f3: true },
    { id: 25, f1: 4, f2: 'D', f3: false },
    { id: 26, f1: 0, f2: 'D', f3: false },
    { id: 27, f1: 1, f2: 'D', f3: false },
    { id: 28, f1: 2, f2: 'E', f3: false },
    { id: 29, f1: 3, f2: 'E', f3: false },
    { id: 30, f1: 4, f2: 'E', f3: false },
    { id: 31, f1: 0, f2: 'E', f3: false },
  ] :
    Array(n).fill(null).map((row, i) => {
      return { id: i, f1: i % 97, f2: i % 2 === 0 ? 'A' : i % 3 === 0 ? 'B' : i % 5 === 0 ? 'C' : i % 7 === 0 ? 'D' : 'E', f3: i % 2 === 0 }
    })
}

const data = generateDataset('data1', 10)

const structs = [
  { title: 'pie1', table: 'UnivariateFrequency', type: 'pie', attributes: ['f1', 'f2', 'f3'] },
  { title: 'bar1', table: 'UnivariateFrequency', type: 'bar', attributes: ['f1', 'f2', 'f3'] },
  {
    title: 'pie2-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[0, 1], [3, 4]] },
    { attr: 'f2', category: [['A', 'B'], ['C', 'D']] },
      'f3']
  },
  {
    title: 'bar2-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [[0, 1], [3, 4]] },
    { attr: 'f2', category: [['A', 'B'], ['C', 'D']] },
      'f3']
  },
  { title: 'pie3-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]] },] },
  { title: 'bar3-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]] },] },
]

const distribute = (data, attribute) => data.reduce((distributor, row) => {

  if (!row.hasOwnProperty(attribute)) {
    return distributor
  }

  var value = row[attribute]
  var current = { index: distributor.values.size, occurrencies: 1 }
  if (distributor.values.has(value)) {
    current = distributor.values.get(value)
    current.occurrencies += 1
  }
  distributor.values.set(value, current)
  distributor.distribution[current.index] = { x: value, y: current.occurrencies }

  return distributor
}, { values: new Map(), distribution: [] })

const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

const merge = (data, category) => {

  const distribution = data.distribution.reduce((grouped, elem) => flatten(category).includes(elem.x) ? grouped :
    grouped.concat({ x: '' + elem.x, y: elem.y }), category.map(group => group.reduce((merger, elem) => data.values.get(elem) ? {
      x: merger.x + (merger.x !== '' ? ',' : '') + elem,
      y: merger.y + data.values.get(elem).occurrencies,
    } : merger, { x: '', y: 0 })).filter(elem => elem.x))

  const values = distribution.reduce((merger, currentValue) => merger.set(currentValue.x, currentValue.y), new Map())

  return { distribution, values }
}

let i = 0
const charts = flatten(structs.map((struct) => {
  return struct.attributes.map((attr) => {

    let sstruct = { type: struct.type, title: struct.title, id: i++ }

    const cattr = typeof attr === 'string' ? attr : attr.attr
    sstruct.attr = cattr
    let sdata = distribute(data, cattr)

    if (typeof attr !== 'string') {
      sstruct.category = attr.category
      sdata = merge(sdata, attr.category)
    }

    // console.info('attr=', attr)
    // console.info('title='+ struct.title + ' attr=' + attr + ' data=', sdata)

    return { sstruct, sdata }
  })
}))

console.info('charts=', charts)

const dataset = (state = { data, charts }, action) => {
  switch (action.type) {
    case "RELOAD":
      /*
       * Reload now only involved chart (specified by id payload attribute)
       */
      const chart = state.charts[action.payload]
      // To be continued....

      return {
        ...state,
      }

    case "MODIFY":

      /*
       * Update only f1 field (just for test)
       */
      const prevValue = state.data[0].f1
      const newValue = prevValue + 1

      const data = state.data.map((row, i) => { return i === 0 ? { ...row, f1: newValue } : row })

      /*
       * Update now only involved chart (those with mofified attribute attribute)
       */
      // To be implemented....

      return {
        ...state, data
      }
    default:
      return state
  }
}

export default dataset
