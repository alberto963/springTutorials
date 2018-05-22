import React from 'react'
import './../index.css'

import Square from './Square'

class Row extends React.Component {
  // Refactored for improvement #3: Rewrite Board to use two loops to make the squares instead of hardcoding them..

  render () {

    const r = this.props.r * 3

    const squares = Array(3).fill(null).map((square, i) => {
      return (<Square num={r + i} click={() => this.props.click(r + i)} />)
    })

    return (
      <div className="board-row">
        {squares}
      </div>
    )
  }
}

export default Row