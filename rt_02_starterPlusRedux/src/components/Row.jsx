import React from "react"
import uuidv1 from "uuid"

import "./../index.css"

import Square from "./Square"

export default function Row(props) {
  const r = props.r * 3

  // NOTE: key is needed to avoid the warning: Each child in an array or iterator should have a unique "key" prop.
  const squares = Array(3).fill(null).map((square, i) => {
      return <Square key={uuidv1()} num={r + i} />
    })

  return <div className="board-row">{squares}</div>
}
