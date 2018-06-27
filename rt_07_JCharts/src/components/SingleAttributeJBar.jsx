import React from 'react'
import PropTypes from 'prop-types'
import * as V from 'victory'

import '../index.css'

export default function SingleAttributeJBar(props) {

  const barStyle = { labels: { fontSize: 20, fill: 'white' },
                   data: { fill: (d) => d.x <0 ? '#000000' : '#c43a31', stroke: (d) => d.x < 0 ? '#000000' : '#c43a31', fillOpacity: 0.7, strokeWidth: 3 }}

  return <div className='panel-elem'>
        <V.VictoryChart domainPadding={10} theme={V.VictoryTheme.material}>
          <V.VictoryLabel textAnchor='start' style={{ fontSize: 20, fill: 'white' }} x={150} y={10} labelPlacement='parallel' text={props.struct.title} />
          <V.VictoryAxis tickValues={props.data.distribution.map(d => d.x)} label={props.struct.xtitle}
                          style={{ 
                            axis: {stroke: '#756f6a'}, 
                            axisLabel: {fontSize: 20, padding: 30, fill: 'white'},
                            grid: {stroke: (x) => x > 2 ? 'red' : 'grey'}, 
                            ticks: {stroke: 'white', size: 1}, 
                            tickLabels: {fontSize: 15, padding: 5, margin: 5, fill: 'white'} }} />
          <V.VictoryAxis dependentAxis tickFormat={(y) => (`${y}`)}
                          style={{ 
                            axis: {stroke: '#756f6a'}, 
                            axisLabel: {fontSize: 20, padding: 30},
                            grid: {stroke: (x) => x > 2 ? 'red' : 'green'}, 
                            ticks: {stroke: 'white', size: 1}, 
                            tickLabels: {fontSize: 15, padding: 5, margin: 5, fill: 'white'} }} />
          <V.VictoryBar width={50} height={20} standalone={false} data={props.data.distribution} style={barStyle} alignment='start'
                        animate={{duration: 2000, onLoad: { duration: 1000 }}}
                        barRatio={0.25} />
        </V.VictoryChart>
      </div>
}

SingleAttributeJBar.propTypes = {
  data: PropTypes.object.isRequired,
  struct: PropTypes.object.isRequired,
}