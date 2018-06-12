import React from 'react'
import * as V from 'victory'
import { connect } from "react-redux";

import '../index.css'

const mapStateToProps = (state, ownProps) => {
    return {
      data: state.distribution.data,
    }
 }
  
class SingleAttributeJPie extends React.Component {

  render() {
    const pieStyle = { labels: { fontSize: 10, fill: 'black'}}

  return <div className='panel-elem'>
      <svg values='' width={200} height={200}>
        <V.VictoryPie standalone={false} width={200} height={200} data={this.props.data.distribution} innerRadius={25} labelRadius={50}
                      style={pieStyle} colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy' ]}
                      animate={{duration: 2000, onLoad: { duration: 1000 }}} />

        <V.VictoryLabel textAnchor='middle' style={{ fontSize: 10 }} x={100} y={100} text={this.props.struct.title + '-'+ this.props.title}  />
      </svg>
    </div>
  }
}

export default connect(mapStateToProps, null)(SingleAttributeJPie)
