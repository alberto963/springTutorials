// src/js/components/List.js
import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { list: state.list }
}

const UnconnectedList = ({ list }) => (
  <ol className="list-group list-group-flush">
    {list.map(elem => (
      <li className="list-group-item" key={elem.id}>
        {elem.title}
      </li>
    ))}
  </ol>
)

const List = connect(mapStateToProps)(UnconnectedList)

export default List;