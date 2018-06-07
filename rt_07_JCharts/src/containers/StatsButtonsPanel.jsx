import React from 'react'
import uuidv1 from 'uuid'
import { connect } from "react-redux";
import { update } from "../actions/index";

import '../index.css'

const mapDispatchToProps = {
  update,
}

function StatsButtonsPanel(props) {
  const buttons = props.struct.map((struct) => {
    return struct.attributes.map((attr) => {
        const cattr = typeof attr === 'string' ? attr : attr.attr
        return <button className='chart-button' key={uuidv1()} 
        onClick={this.props.update}>{struct.title + '-' + cattr}</button>
    })
  })
  return <div className='panel'><div className='panel-row'>{buttons}</div></div>
}

export default connect(null, mapDispatchToProps)(StatsButtonsPanel)
