import React from 'react'

import './../index.css'

function Square(props) {
  return (
    <button className="square-row" onClick={props.onClick} >
      <div>
        <span className="num">{props.num}</span>      
        <span className="square">{props.value}</span>
      </div>
    </button>
  )
}

export default Square