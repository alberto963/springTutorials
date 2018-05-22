import React from 'react'
import { connect } from "react-redux"

import './../index.css'

const mapStateToProps = (state, ownProps) => {
  return {
    squares: state.click.squares,
    winSequence: state.check.winSequence,
  }
}

function Square(props) {
  
  let isWinner = props.winSequence && props.winSequence.includes(props.num)
  isWinner = isWinner ? isWinner.toString() : 'false'

  return (
    <button className="square-row" onClick={props.click} >
      <div>
        <span className="num">{props.num}</span>      
        <span className="square" isWinner={isWinner}>{props.squares[props.num]}</span>
      </div>
    </button>
  )
}

export default connect(mapStateToProps)(Square)