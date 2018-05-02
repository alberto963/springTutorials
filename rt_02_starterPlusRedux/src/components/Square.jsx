import React from 'react'
import ReactDOM from 'react-dom'
import './../index.css'

function Square(props) {
  let winner = props.winSequence && props.winSequence.includes(props.num)
  winner = winner ? winner.toString() : 'false'
  return (
    <button className="square-row" onClick={props.onClick} >
      <div>
        <span className="num">{props.num}</span>      
        <span className="square" winner={winner}>{props.value}</span>
      </div>
    </button>
  )
}

export default Square