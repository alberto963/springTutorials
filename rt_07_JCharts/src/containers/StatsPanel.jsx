import React from 'react'
import uuidv1 from 'uuid'
import { connect } from "react-redux";

import '../index.css'

import SingleAttributeJPie from '../components/SingleAttributeJPie'
import SingleAttributeJBar from '../components/SingleAttributeJBar'

const mapStateToProps = (state, ownProps) => {
  return {
    datas: state.dataset.charts,
  }
}

class StatsPanel extends React.Component {

  render() {
    const charts = this.props.datas.map((d) => {

      if (d.sstruct.type === 'pie') {
        return <SingleAttributeJPie key={uuidv1()} data={d.sdata} struct={{ title: d.sstruct.title }} title={d.sstruct.attr} />
      }

      if (d.sstruct.type === 'bar') {
        return <SingleAttributeJBar key={uuidv1()} data={d.sdata} struct={{ title: d.sstruct.title }} title={d.sstruct.attr} />
      }

      return <span>Wrong chart type</span>
    })

    return <div className='panel'>
      <div className='panel-row'>{charts}</div>
    </div>
  }
}

export default connect(mapStateToProps, null)(StatsPanel)
