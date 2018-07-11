import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import * as V from 'victory'

import '../index.css'

const mapStateToProps = (state, ownProps) => {
  return {
    x: state.domain.x,
    y: state.domain.y,
    w: state.domain.w,
    h: state.domain.h,
    xl: state.domain.xl,
    yl: state.domain.yl,
  }
}

function SingleAttributeJHBar(props) {

  const barStyle = {
    labels: { fontSize: 20, fill: 'white' },
    data: {
      fill: (d) => d.x < 0 ? '#000000' : '#c43a31',
      stroke: (d) => d.x < 0 ? '#000000' : '#c43a31',
      fillOpacity: 0.7, strokeWidth: 3
    }
  }

  const axisStyle = {
    axis: { stroke: '#756f6a' },
    axisLabel: { fontSize: 20, padding: 30, fill: 'white' },
    grid: { stroke: x => x > 2 ? 'red' : 'green' },
    ticks: { stroke: 'white', size: 1 },
    tickLabels: { fontSize: 15, padding: 5, margin: 5, fill: 'white' }
  }

  return <div className='panel-elem'>
    <V.VictoryChart theme={V.VictoryTheme.material} domain={{x:[props.w, props.h]}} domainPadding={{ x: props.x, y: props.y }} >

      <V.VictoryLabel textAnchor='start' style={{ fontSize: 20, fill: 'white' }}
        x={props.xl} y={props.yl} labelPlacement='parallel' text={props.struct.title} />

      <V.VictoryAxis label={props.struct.xtitle} style={axisStyle} />

      <V.VictoryAxis dependentAxis style={axisStyle} offsetX={props.xl} tickFormat={y => `${y}`} />

      <V.VictoryBar horizontal data={props.data.distribution} style={barStyle} labels={d => d.y}/>

    </V.VictoryChart>
  </div>
}

SingleAttributeJHBar.propTypes = {
  data: PropTypes.object.isRequired,
  struct: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, null)(SingleAttributeJHBar)
