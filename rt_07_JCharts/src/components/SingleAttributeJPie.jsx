import React from 'react'
import PropTypes from 'prop-types'
import * as V from 'victory'

import '../index.css'

const SingleAttributeJPie = (props) => {

  const pieStyle = { labels: { fontSize: 10, fill: 'black' } }

  return <div className='panel-elem'>
    <svg values='' width={200} height={200}>
      <V.VictoryPie standalone={false} width={200} height={200} data={props.data.distribution} innerRadius={25} labelRadius={50}
        style={pieStyle} colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        animate={{ duration: 2000, onLoad: { duration: 1000 } }} />

      <V.VictoryLabel textAnchor='middle' style={{ fontSize: 10 }} x={100} y={100} text={props.struct.title + '-' + props.title} />
    </svg>
  </div>
}

SingleAttributeJPie.propTypes = {
  data: PropTypes.object.isRequired,
  struct: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default SingleAttributeJPie