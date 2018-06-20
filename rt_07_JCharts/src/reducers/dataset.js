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
      return { id: i, f1: i % 97, f2: i % 2 === 0 ? 'AAA' : i % 3 === 0 ? 'BBB' : i % 5 === 0 ? 'C' : i % 7 === 0 ? 'D' : 'E', f3: i % 2 === 0 }
    })
}

const data = generateDataset('data1', 10)

const structs = [
  { title: 'pie1', table: 'UnivariateFrequency', type: 'pie', attributes: ['f1', 'f2', 'f3'] },
  { title: 'bar1', table: 'UnivariateFrequency', type: 'bar', attributes: ['f1', 'f2', 'f3'] },
  {
    title: 'pie2-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [['0', '1'], ['3', '4']] },
    { attr: 'f2', category: [['AAA', 'BBB'], ['C', 'D']] },
      'f3']
  },
  {
    title: 'bar2-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [['0', '1'], ['3', '4']] },
    { attr: 'f2', category: [['AAA', 'BBB'], ['C', 'D']] },
      'f3']
  },
  { title: 'pie3-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [['10', '11'], ['13', '14']] },] },
  { title: 'bar3-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [['10', '11'], ['13', '14']] },] },
]

const distribute = (data, attribute) => data.reduce((distributor, row) => {

  if (!row.hasOwnProperty(attribute)) {
    return distributor
  }

  var value = String(row[attribute])
  var current = { index: distributor.values.size, occurrencies: 1 }
  if (distributor.values.has(value)) {
    current = distributor.values.get(value)
    current.occurrencies += 1
  }
  distributor.values.set(value, current)
  distributor.distribution[current.index] = { x: value, y: current.occurrencies }

  return distributor
}, { distribution: [], values: new Map() })

const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

const merge = (data, category) => {

  const distribution = data.distribution.reduce((grouped, elem) => flatten(category).includes(elem.x) ? grouped :
    grouped.concat({ x: '' + elem.x, y: elem.y }), category.map(group => group.reduce((merger, elem) => data.values.get(elem) ? {
      x: merger.x + (merger.x !== '' ? ',' : '') + elem,
      y: merger.y + data.values.get(elem).occurrencies,
    } : merger, { x: '', y: 0 })).filter(elem => elem.x))

  //const values = distribution.reduce((merger, currentValue) => merger.set(currentValue.x, currentValue.y), new Map())

  return distribution
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
      sdata.distribution = merge(sdata, attr.category)
    }

    sdata.values = new Map(Array.from(sdata.values, ([key, value]) => [key, value.index]))

    // console.info('attr=', attr)
    // console.info('title='+ struct.title + ' attr=' + attr + ' data=', sdata)

    return { sstruct, sdata }
  })
}))

console.info('charts=', charts)

// NOTE: takeaway, it is difficult to update both the distribution and the map,
// now I should remove the element in the map with key prevVal only if it has been removed from the distribution
// but how can I know it now...? Also all the element indexes should be updated, not easy

// Same topic if a new value is added to the distribution

// DONE: instead of using the map computed in distribute function above,I compute the new distribution by using only distribution, 
// i.e. not using the map (that is hence useless after the computation of the distribution)
// Yess, it is much easer, get rid of the map here

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
      const ATTR = 'f1'
      const PREVVALUE = state.data[0].f1
      const NEWVALUE = PREVVALUE + 1

      /*
       * Update dataSet in order to have correct previous value for subsequent events
       */
      const data = state.data.map((row, i) => { return i === 0 ? { ...row, f1: NEWVALUE } : row })
      console.info('Modified data=', data)

      const contains = (vx, v) => vx.split(',').includes(String(v))
      const containsXOR = (vx, v1, v2) => vx.split(',').includes(String(v1)) && !vx.split(',').includes(String(v2))
      const computeLabel = (category, v) => { 
        const ret = category ? category.reduce((r, c) => c.includes(String(v)) ? c.toString(): r+'', '' ) : String(v)

        return ret === '' ? String(v) : ret
      }

      // eslint-disable-next-line
      const computeLabelForDebug = (category, v) => {
        console.info('category=',category)

        let ret = category ? category.reduce((r, c) => { 

          console.info('r=',r)
          console.info('c=',c)
          console.info('c=',c.toString())

          return c.includes(String(v)) ? c.toString(): r+'' 
      }, '' ) : String(v)

      if (ret === '') {
        ret = String(v)
      }

      console.info('ret=',ret)
      console.info('typeof ret=', typeof ret)
      return ret
     }

      // eslint-disable-next-line
      const containsForDebug=function (vx, v) {
        console.info('vx=',vx)
        console.info('typeof vx=',typeof vx)
        
        console.info('v=',v);
        console.info('typeof v=',typeof v)

        const vs=vx.split(',')
        
        console.info('vs=',vs);
        console.info('typeof vs=',typeof vs)

        const r=vs.includes(v)
        console.info('r=',r); 
        console.info('============================================'); 

        return r
      }

      /*
       * Update only involved chart (those with modified attribute)
       */
      const charts = state.charts.map(chart => {
        return chart.sstruct.attr === ATTR ? {
          ...chart, sdata: { distribution: chart.sdata.distribution.map(v => containsXOR(v.x, PREVVALUE, NEWVALUE) ?
            { ...v, y: v.y - 1 } : containsXOR(v.x, NEWVALUE, PREVVALUE) ?
            { ...v, y: v.y + 1 } : v).filter(v => v.y !== 0).concat(!chart.sdata.distribution.find(v => contains(v.x, NEWVALUE)) ?
             [{x: computeLabel(chart.sstruct.category, NEWVALUE), y: 1}] : [])
          } } : chart
      })
      
      console.info('Modified charts=', charts)

      return {
        ...state, data, charts,
      }

    default:
      return state
  }
}

export default dataset
