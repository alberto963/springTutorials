import React from 'react'
import ReactDOM from 'react-dom'
import * as V from 'victory'
import uuidv1 from 'uuid'

import './index.css'

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
  ] :
    Array(n).fill(null).map((row, i) => {
      return {id: i, f1: i%97, f2: i%2 === 0 ? 'A' : i%3=== 0 ? 'B' : i%5=== 0 ? 'C' : i%7=== 0 ? 'D' : 'E', f3: i%2 === 0}
    })
}

const updateData = (data) => { 
  return data.map(row => {
      return {
        ...row,
        f1: row.f1 + 1
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
  { title: 'pie1', table: 'UnivariateFrequency', type: 'pie', attributes: ['f1', 'f2', 'f3'] }, 
  { title: 'bar1', table: 'UnivariateFrequency', type: 'bar', attributes: ['f1', 'f2', 'f3'] },
  { title: 'pie2-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[0, 1], [3, 4]]},
                                                                             { attr: 'f2', category: [['A', 'B'], ['C','D']]},
                                                                              'f3'] }, 
  { title: 'bar2-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [[0, 1], [3, 4]]},
                                                                             { attr: 'f2', category: [['A', 'B'], ['C','D']]},
                                                                              'f3'] },
  { title: 'pie3-g', table: 'UnivariateFrequency', type: 'pie', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]}, ] }, 
  { title: 'bar3-g', table: 'UnivariateFrequency', type: 'bar', attributes: [{ attr: 'f1', category: [[10, 11], [13, 14]]}, ] }, 

]

const pieStyle = { labels: { fontSize: 10, fill: 'black'}}
class SingleAttributeJPie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
    }

    update = update.bind(this)
  }
  render() {
    return (
        <div className='panel-elem'>
          <svg values='' width={200} height={200}>
            <V.VictoryPie standalone={false} width={200} height={200} data={this.state.data.distribution} innerRadius={25} labelRadius={50}
                          style={pieStyle} colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy' ]}
                          animate={{duration: 2000, onLoad: { duration: 1000 }}} />

            <V.VictoryLabel textAnchor='middle' style={{ fontSize: 10 }} x={100} y={100} text={this.props.struct.title + '-'+ this.props.title}  />
          </svg>
        </div>
    )
  }
}

const barStyle = { labels: { fontSize: 20, fill: 'black' },
                   data: { fill: (d) => d.x <0 ? '#000000' : '#c43a31', stroke: (d) => d.x < 0 ? '#000000' : '#c43a31', fillOpacity: 0.7, strokeWidth: 3 }}

class SingleAttributeJBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
    }

    update = update.bind(this)
  }
  render() {
    return (
      <div className='panel-elem'>
        <V.VictoryChart domainPadding={10} theme={V.VictoryTheme.material}>
          <V.VictoryLabel textAnchor='start' style={{ fontSize: 20 }} x={150} y={10} labelPlacement='parallel' text={this.props.struct.title + '-'+ this.props.title} />
          <V.VictoryAxis tickValues={Array.from(this.state.data.values.keys())} label='Values'
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
          <V.VictoryBar width={50} height={20} standalone={false} data={this.state.data.distribution} style={barStyle} alignment='start'
                        animate={{duration: 2000, onLoad: { duration: 1000 }}}
                        barRatio={0.25} />
        </V.VictoryChart>
      </div>
    )
  }
}
class StatsPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
    }

    update = update.bind(this)
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

        if (struct.type === 'pie') {
          return <SingleAttributeJPie key={uuidv1()} data={sdata} struct={struct} title={cattr} />
        }
        
        if (struct.type === 'bar') {
          return <SingleAttributeJBar key={uuidv1()} data={sdata} struct={struct} title={cattr} />
        }
        
        return <span>Wrong chart type</span>
      })
    })

    return (
      <div className='panel'>
        <div className='panel-row' >
          {charts}
        </div>
    </div>
    )
  }
}

class StatsButtonsPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
    }
  }
  clickUpdate() {
    const data = updateData(this.state.data);
    this.setState({data : data})
    update(data)
  }
  render() {

    const buttons = this.props.struct.map((struct) => {
      return struct.attributes.map((attr) => {
          const cattr = typeof attr === 'string' ? attr : attr.attr
          return <button className="chart-button" onClick={() => this.clickUpdate()} >{struct.title + '-' + cattr}</button>
      })
    })

    return (
      <div className='panel'>
        <div className='panel-row' >
          {buttons}
        </div>
    </div>
    )
  }
}

function update(data) {
  this.setState({data})
}

function distribute(data, attribute) {

  return data.reduce((distributor, row) => {

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
}

function merge(data, category) {

  console.info('data=', data)
  console.info('category=', category)

 /*
  * Looping on the groups a new distribution is computed by merging all grouped values
  */
  let grouped = category
    .map((group) => {
      return group.reduce((merger, elem) => { 
        const value =  data.values.get(elem)
        return value ? {
          x: merger.x + (merger.x !== '' ? ',' : '') + elem,
          y: merger.y + value.occurrencies,
        } : merger
      }, {x: '', y: 0})
    })
    .filter(e => e.x)

  console.info('grouped=', grouped)

  const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
  const groupedList = flatten(category)

  console.info('groupedList=', groupedList)

  /*
   * Remove all the realizations in the distribution that are now grouped starting from the grouped realization just computed as initial value
   */
  const mergedDistribution = data.distribution.reduce((grouped, elem) => { 
    return groupedList.includes(elem.x) ? grouped : grouped.concat({ x : ''+elem.x, y:elem.y} )
  }, grouped )

  console.info('mergedDistribution=', mergedDistribution)

  /*
   * Update also values map to remove all the values (index + occurrency) that are now grouped 
   * (and should not count twice)
   */
  const mergedValues = mergedDistribution.reduce(
    (accumulator, currentValue ) => accumulator.set(currentValue.x, currentValue.y), new Map()
  )

  return { distribution: mergedDistribution,
           values: mergedValues }
}
// ========================================
const data = generateData('data1', 10)
ReactDOM.render(
  <div className='main-panel'>
    <StatsPanel data={data} struct={struct} />
    <StatsButtonsPanel data={data} struct={struct} />
  </div>,
  document.getElementById('root')
)
