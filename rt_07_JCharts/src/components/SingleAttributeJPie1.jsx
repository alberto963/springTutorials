import React from 'react'
import PropTypes from 'prop-types'
import * as V from 'victory'

import '../index.css'

const SingleAttributeJPie1 = (props) => {

  const pieStyle = { labels: { fontSize: 10, fill: 'white' } }

  return <div className='panel-elem'>
      <V.VictoryPie standalone={true} containerComponent={<V.VictoryContainer/>}
        width={200} height={200}
        padding={{top:0}}
        data={props.data.distribution} labelRadius={50}
        style={pieStyle} colorScale={['green', 'navy', 'orange', 'gold', 'cyan', 'tomato']}
        animate={{ duration: 2000, onLoad: { duration: 1000 } }} />
      <V.VictoryLabel textAnchor='middle' style={{ fontSize: 10, fill: 'white' }} x={100} y={100} text={props.struct.title + '-' + props.struct.xtitle} />
  </div>
}

SingleAttributeJPie1.propTypes = {
  data: PropTypes.object.isRequired,
  struct: PropTypes.object.isRequired,
}

export default SingleAttributeJPie1