import React from 'react'
import './../index.css'

import Row from './Row'
class Board extends React.Component {
  // Refactored for improvement #3: Rewrite Board to use two loops to make the squares instead of hardcoding them..
   render() {
 
     const rows = Array(3).fill(null).map((row, r) => {
       const ri = r * 3
       return (<Row key={r} r={ri} squares={this.props.squares.slice(ri, ri + 3)} onClick={this.props.onClick} winSequence={this.props.winSequence} />)
     })
 
     return (
       <div>
         {rows}
       </div>
     )
   }
 }
 
 export default Board