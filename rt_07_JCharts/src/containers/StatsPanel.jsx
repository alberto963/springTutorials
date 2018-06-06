import React from 'react'
import ReactDOM from 'react-dom'
import uuidv1 from 'uuid'

import '../index.css'

import SingleAttributeJPie from '../components/SingleAttributeJPie'
import SingleAttributeJBar from '../components/SingleAttributeJBar'
import StatsButtonsPanel from '../containers/StatsButtonsPanel'
export default class StatsPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
    }

    this.clickUpdate = this.clickUpdate.bind(this)
  }
  clickUpdate() {
    const updateData = data => data.map(row => { return { ...row, f1: row.f1 + 1 }})
    this.setState({data: updateData(this.state.data)})
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

    return <div className='panel'>
        <div className='panel-row'><StatsButtonsPanel struct={this.props.struct} clickUpdate={this.clickUpdate}/></div>
        <div className='panel-row'>{charts}</div>
    </div>
  }
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

