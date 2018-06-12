import React from 'react'
import uuidv1 from 'uuid'
import { connect } from "react-redux";
import { modifyDataset, modify } from "../actions/index";

import '../index.css'

const mapDispatchToProps = {
  modifyDataset,
  modify
}

class StatsButtonsPanel extends React.Component {

  render() {
      const buttons = this.props.struct.map((struct) => {
      return struct.attributes.map((attr) => {
          const cattr = typeof attr === 'string' ? attr : attr.attr
          if (struct.type === 'pie') {
            return <button className='chart-button' key={uuidv1()} 
              onClick={this.props.modifyDataset}>{struct.title + '-' + cattr}</button>
          }
          return <button className='chart-button' key={uuidv1()} 
            onClick={this.props.update}>{struct.title + '-' + cattr}</button>
      })
    })
    return <div className='panel-row'>{buttons}</div>
  }
}
export default connect(null, mapDispatchToProps)(StatsButtonsPanel)
