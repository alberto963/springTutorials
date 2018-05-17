import React from 'react'
import { connect } from "react-redux"

import './../index.css'
import { click, } from "../actions/index"

const mapStateToProps = (state) => {
  return { 
    status: state.status,
  }
}

const mapDispatchToProps = {
  click,
}

function WrappedSquare(props) {
  let winner = props.winSequence && props.winSequence.includes(props.num)
  winner = winner ? winner.toString() : 'false'
  return (
    <button className="square-row" onClick={props.click} >
      <div>
        <span className="num">{props.num}</span>      
        <span className="square" winner={winner}>{props.value}</span>
      </div>
    </button>
  )
}

const Square = connect(mapStateToProps, mapDispatchToProps)(WrappedSquare)

export default Square