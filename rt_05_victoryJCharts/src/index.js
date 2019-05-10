import React from 'react'
import ReactDOM from 'react-dom'
import * as V from 'victory'
import uuidv1 from 'uuid'
import NormalDistribution from 'normal-distribution'

import './index.css'

//const normDist = new NormalDistribution();
const normDist = new NormalDistribution(0, 5);

const normal = () => {
  const u = Math.random() * 2 - 1;
  const v = Math.random() * 2 - 1;
  const r = u * u + v * v;
  if (r === 0 || r > 1) {
    return normal();
  }
  const c = Math.sqrt(-2 * Math.log(r) / r);

  return u * c;
}

const normal2 = () => Math.sqrt(-2 * Math.log(Math.random()))*Math.cos((2*Math.PI) * Math.random())

const catU = (r=10) => {
  const val = Math.random() * r; 
  return Math.floor(val)
}

const catN = (r=10) => {
  const val = normal() * r /4.0 + r / 2.0; 
  return (val > r || val < 0)  ? catN(r) : Math.floor(val)
}

const generateData = (dataSet, n) => { 
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
  ] : dataSet === 'data1' ?
    Array(n).fill(null).map((row, i) => {
      const x = i - n/2
      // const e = x/25.0
      // const y = Math.exp(-e*e)*100.0
      // const r0 = (i * 10  - 10)/10
      // const r1 = (i * 10  + 10)/10
      // console.log(r0, r1)
      return {
        id: i,
        f1: i%97, f2: i%2 === 0 ? 'A' : i%3=== 0 ? 'B' : i%5=== 0 ? 'C' : i%7=== 0 ? 'D' : 'E', f3: i%2 === 0,
        f4: catU(40), f5: catN(40), f6: normDist.pdf(x) * n / 10.0
//        f4: catU(10), f5: catN(10), f6: 1.0 * n / 10.0
      }
    }) :
    Array(n).fill(null).map((row, i) => {
      const x = i - n/2
      // const e = x/25.0
      // const y = Math.exp(-e*e)*100.0
      // const r0 = (i * 10  - 10)/10
      // const r1 = (i * 10  + 10)/10
      // console.log(r0, r1)
      const f6 = normDist.pdf(x) * n / 10.0
      // const f6 =1.0 * n / 10.0
      return {
        id: x, f6
      }
    })
}

// const struct = [
//   { title: 'bar2-g', table: 'UnivariateFrequency', type: 'bar', attributes: [ { attr: 'f2', category: [['A', 'B'], ['C','D']]}] },
// ]

// const struct = [
//   { title: 'pie2-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]}, ] }, 
// ]

const struct = [
  // { title: 'pie1', table: 'UnivariateFrequency', type: 'pie', attributes: ['f1', 'f2', 'f3'] }, 
  // { title: 'bar1', table: 'UnivariateFrequency', type: 'bar', attributes: ['f1', 'f2', 'f3'] },
  // { title: 'pie2-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[0, 1], [3, 4]]},
  //                                                                            { attr: 'f2', category: [['A', 'B'], ['C','D']]},
  //                                                                             'f3'] }, 
  // { title: 'bar2-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [[0, 1], [3, 4]]},
  //                                                                            { attr: 'f2', category: [['A', 'B'], ['C','D']]},
  //                                                                             'f3'] },
  // { title: 'pie3-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]}, ] }, 
  // { title: 'bar3-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]}, ] }, 
  // { title: 'bar3-g', table: 'UnivariateFrequency', type: 'bar', scale: 'log', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]},] },
  // { title: 'pie4-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f4', category: [] }, ] }, 
  // { title: 'bar4li-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f4', category: [] },] }, 
  // { title: 'bar4lo-g', table: 'UnivariateFrequency', type: 'bar', scale: 'log', attributes: [{ attr: 'f4', category: [], },] },
  // { title: 'pie5-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f5', category: [] }, ] }, 
  { title: 'bar5li-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f5', category: [] },] }, 
  { title: 'bar5lo-g', table: 'UnivariateFrequency', type: 'bar', scale: 'log', attributes: [{ attr: 'f5', category: [], },] }, 
  { title: 'line1-g', table: 'UnivariateFrequency', type: 'lin', attributes: [{ attr: 'f6', category: [], },] }, 
]

function SingleAttributeLine(props) {
  return <div className='panel-elem'>
          <V.VictoryChart theme={V.VictoryTheme.material}>
            <V.VictoryLine
              data={props.data}
              x='id'
              y='f6'
            />
          </V.VictoryChart>
        </div>
  }

function SingleAttributeJPie(props) {
  const pieStyle = { labels: { fontSize: 10, fill: 'black'}}

  return <div className='panel-elem'>
          <svg values='' width={200} height={200}>
            <V.VictoryPie standalone={false} width={200} height={200} data={props.data.distribution} innerRadius={25} labelRadius={50}
                          style={pieStyle} colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy' ]}
                          animate={{duration: 2000, onLoad: { duration: 1000 }}} />

            <V.VictoryLabel textAnchor='middle' style={{ fontSize: 10 }} x={100} y={100} text={props.struct.title + '-'+ props.title}  />
          </svg>
        </div>
  }

function SingleAttributeJBar(props) {

  const barStyle = { labels: { fontSize: 20, fill: 'black' },
                   data: { fill: (d) => d.x <0 ? '#000000' : '#c43a31', stroke: (d) => d.x < 0 ? '#000000' : '#c43a31', fillOpacity: 0.7, strokeWidth: 3 }}

  return <div className='panel-elem'>
        <V.VictoryChart domainPadding={10} theme={V.VictoryTheme.material} scale={{y: props.struct.scale, x: 'linear'}} >
          <V.VictoryLabel textAnchor='start' style={{ fontSize: 20 }} x={150} y={10} labelPlacement='parallel' text={props.struct.title + '-'+ props.title} />
          <V.VictoryAxis tickValues={Array.from(props.data.values.keys())} label='Values'
                          style={{ 
                            axis: {stroke: '#756f6a'}, 
                            axisLabel: {fontSize: 20, padding: 30},
                            grid: {stroke: (x) => x > 2 ? 'red' : 'grey'}, 
                            ticks: {stroke: 'white', size: 1}, 
                            tickLabels: {fontSize: 15, padding: 5, margin: 5} }} />
          <V.VictoryAxis dependentAxis tickFormat={(y) => (`${y}`)}
                          style={{ 
                            axis: {stroke: '#756f6a'}, 
                            axisLabel: {fontSize: 20, padding: 30},
                            grid: {stroke: (x) => x > 2 ? 'red' : 'green'}, 
                            ticks: {stroke: 'white', size: 1}, 
                            tickLabels: {fontSize: 15, padding: 5, margin: 5} }} />
          <V.VictoryBar width={50} height={20} standalone={false} data={props.data.distribution} style={barStyle} alignment='start'
                        animate={{duration: 2000, onLoad: { duration: 1000 }}}
                        barRatio={0.25} />
        </V.VictoryChart>
      </div>
}
class StatsPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
    }

    clickUpdate = clickUpdate.bind(this)
  }

  render() {

    const charts = this.props.struct.map((struct) => {
      return struct.attributes.map((attr) => {

        const cattr = typeof attr === 'string' ? attr : attr.attr
        let sdata = distribute(this.state.data, cattr)

        if (typeof attr !== 'string') {
          sdata = merge(sdata, attr.category)
        }

        // console.info('attr=', attr)
        // console.info('title='+ struct.title + ' attr=' + attr + ' data=', sdata)

        sdata.distribution.sort((e, f) => e.x * 1 - f.x * 1)

        if (struct.type === 'lin') {
          return <SingleAttributeLine key={uuidv1()} data={this.state.data} struct={struct} title={cattr} />
        }
        
        if (struct.type === 'pie') {
          return <SingleAttributeJPie key={uuidv1()} data={sdata} struct={struct} title={cattr} />
        }
        
        if (struct.type === 'bar') {
          return <SingleAttributeJBar key={uuidv1()} data={sdata} struct={struct} title={cattr} />
        }
        
        return <span>Wrong chart type</span>
      })
    })

    return <div className='panel'><div className='panel-row' >{charts}</div></div>
  }
}

function StatsButtonsPanel(props) {
    const buttons = props.struct.map((struct) => {
      return struct.attributes.map((attr) => {
          const cattr = typeof attr === 'string' ? attr : attr.attr
          return <button className='chart-button' key={uuidv1()} onClick={clickUpdate} >{struct.title + '-' + cattr}</button>
      })
    })

    return <div className='panel'><div className='panel-row' >{buttons}</div></div>
}

function clickUpdate() {
  const updateData = data => data.map(row => { return { ...row, f1: row.f1 + 1 }})
  this.setState({data: updateData(this.state.data)})
}

const distribute = (data, attribute) => data.reduce((distributor, row) => {

    if (!row.hasOwnProperty(attribute)) { 
      return distributor
    }

    var value = row[attribute]
    var current = { index: distributor.values.size, occurrencies: 1 }
    if (distributor.values.has(value)) {
      current = distributor.values.get(value)
      current.occurrencies +=1
    }
    distributor.values.set(value, current)
    distributor.distribution[current.index] = { x: value, y: current.occurrencies }

    return distributor
    }, { values : new Map(), distribution: [] })

const merge2 = (data, category) => {

  console.info('data=', data)
  console.info('category=', category)

 /*
  * Looping on the groups a new distribution is computed by merging all grouped values
  */
  let grouped = category.map(group => group.reduce((merger, elem) => data.values.get(elem) ? {
          x: merger.x + (merger.x !== '' ? ',' : '') + elem,
          y: merger.y + data.values.get(elem).occurrencies,
        } : merger, {x: '', y: 0})).filter(elem => elem.x)

  console.info('grouped=', grouped)

  const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
  const groupedList = flatten(category)

  console.info('groupedList=', groupedList)

  /*
   * Remove all the realizations in the distribution that are now grouped starting from the grouped realization just computed as initial value
   */
  const distribution = data.distribution.reduce((grouped, elem) => groupedList.includes(elem.x) ? grouped : grouped.concat({ x : ''+elem.x, y:elem.y} ), grouped)

  console.info('distribution=', distribution)

  /*
   * Update also values map to remove all the values (index + occurrency) that are now grouped 
   * (and should not count twice)
   */
  const values = distribution.reduce((merger, currentValue ) => merger.set(currentValue.x, currentValue.y), new Map())

  return { distribution, values }
}

/*
 * A more compressed merge function
 */
const merge = (data, category) => {

  const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

  const distribution = data.distribution.reduce((grouped, elem) => flatten(category).includes(elem.x) ? grouped :
   grouped.concat({ x : ''+elem.x, y:elem.y} ), category.map(group => group.reduce((merger, elem) => data.values.get(elem) ? {
    x: merger.x + (merger.x !== '' ? ',' : '') + elem,
    y: merger.y + data.values.get(elem).occurrencies,
  } : merger, {x: '', y: 0})).filter(elem => elem.x))

  const values = distribution.reduce((merger, currentValue ) => merger.set(currentValue.x, currentValue.y), new Map())

  return { distribution, values }
}

// ========================================
const data = generateData('data1', 5000)
ReactDOM.render(
  <div className='main-panel'>
    <StatsPanel data={data} struct={struct} />
    <StatsButtonsPanel struct={struct} />
  </div>,
  document.getElementById('root')
)
