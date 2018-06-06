import React from 'react'
import ReactDOM from 'react-dom'
import uuidv1 from 'uuid'

import '../index.css'

export default function StatsButtonsPanel(props) {
  const buttons = props.struct.map((struct) => {
    return struct.attributes.map((attr) => {
        const cattr = typeof attr === 'string' ? attr : attr.attr
        return <button className='chart-button' key={uuidv1()} onClick={props.clickUpdate}>{struct.title + '-' + cattr}</button>
    })
  })

  return <div className='panel'><div className='panel-row'>{buttons}</div></div>
}