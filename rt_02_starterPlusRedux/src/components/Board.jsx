import React from 'react'
import './../index.css'

import Row from './Row'
class Board extends React.Component {
  // Refactored for improvement #3: Rewrite Board to use two loops to make the squares instead of hardcoding them..
   render() {
 
    // let self=this
     const rows = Array(3).fill(null).map((row, r) => {
       return (<Row r={r} click={this.props.click} />)
     })
 
     return (
       <div>
         {rows}
       </div>
     )
   }
 }
 
 export default Board