import React from 'react'
import uuidv1 from 'uuid'
import { connect } from "react-redux";

import '../index.css'

import SingleAttributeJPie from '../components/SingleAttributeJPie'
import SingleAttributeJPie1 from '../components/SingleAttributeJPie1'
import SingleAttributeJBar from '../components/SingleAttributeJBar'
import SingleAttributeJHBar from '../components/SingleAttributeJHBar'

const mapStateToProps = (state, ownProps) => {
  return {
    charts: state.dataset.charts,
  }
}

class StatsPanel extends React.Component {

  render() {
    const charts = this.props.charts.map((chart) => {

      if (chart.sstruct.type === 'pie') {
        return <SingleAttributeJPie key={uuidv1()} data={chart.sdata} struct={{ title: chart.sstruct.title, xtitle: chart.sstruct.attr}} />
      }

      if (chart.sstruct.type === 'pie1') {
        return <SingleAttributeJPie1 key={uuidv1()} data={chart.sdata} struct={{ title: chart.sstruct.title, xtitle: chart.sstruct.attr}} />
      }

      if (chart.sstruct.type === 'bar') {
        return <SingleAttributeJBar key={uuidv1()} data={chart.sdata} struct={{ title: chart.sstruct.title, xtitle: chart.sstruct.attr}} />
      }

      if (chart.sstruct.type === 'hbar') {
        return <SingleAttributeJHBar key={uuidv1()} data={chart.sdata} struct={{ title: chart.sstruct.title, xtitle: chart.sstruct.attr}} />
      }

      return <span>Wrong chart type</span>
    })

    return <div className='panel'>
      <div className='panel-row'>{charts}</div>
    </div>
  }
}

export default connect(mapStateToProps, null)(StatsPanel)
