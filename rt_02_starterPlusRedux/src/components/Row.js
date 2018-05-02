import React from 'react'
import ReactDOM from 'react-dom'
import './../index.css'

import Square from './Square'

class Row extends React.Component {
  // Refactored for improvement #3: Rewrite Board to use two loops to make the squares instead of hardcoding them..

  render () {

    const ri = this.props.r

    const squares = this.props.squares.map((square, i) => {
      return (<Square key={i} num={ri + i} value={square} onClick={() => this.props.onClick(ri + i)} winSequence={this.props.winSequence}/>)
    })

    return (
      <div className="board-row">
        {squares}
      </div>
    )
  }
}

export default Row