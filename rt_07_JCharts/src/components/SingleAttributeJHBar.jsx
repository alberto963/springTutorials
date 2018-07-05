import React from 'react'
import PropTypes from 'prop-types'
import * as V from 'victory'

import '../index.css'

export default function SingleAttributeJHBar(props) {

  const barStyle = {
    labels: { fontSize: 20, fill: 'white' },
    data: { fill: (d) => d.x < 0 ? '#000000' : '#c43a31', stroke: (d) => d.x < 0 ? '#000000' : '#c43a31', fillOpacity: 0.7, strokeWidth: 3 }
  }

  const axisStyle = {
      axis: { stroke: '#756f6a' },
      axisLabel: { fontSize: 20, padding: 30, fill: 'white' },
      grid: { stroke: x => x > 2 ? 'red' : 'green' },
      ticks: { stroke: 'white', size: 1 },
      tickLabels: { fontSize: 15, padding: 5, margin: 5, fill: 'white' }
  }

  return <div className='panel-elem'>
    <V.VictoryChart theme={V.VictoryTheme.material} domainPadding={{y: 10}} >
      <V.VictoryLabel textAnchor='start' style={{ fontSize: 20, fill: 'white' }}
        x={150} y={10} labelPlacement='parallel' text={props.struct.title} />
      <V.VictoryAxis label={props.struct.xtitle} style={axisStyle} />
      <V.VictoryAxis dependentAxis style={axisStyle} tickFormat={y => `${y}`}  />
      <V.VictoryBar horizontal data={props.data.distribution} style={barStyle} />
    </V.VictoryChart>
  </div>
}

SingleAttributeJHBar.propTypes = {
  data: PropTypes.object.isRequired,
  struct: PropTypes.object.isRequired,
}