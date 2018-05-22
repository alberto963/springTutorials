import React from "react"
import "./../index.css"

import Square from "./Square"

export default function Row(props) {
  const r = props.r * 3

  const squares = Array(3).fill(null).map((square, i) => {
      return <Square num={r + i} />
    })

  return <div className="board-row">{squares}</div>
}
