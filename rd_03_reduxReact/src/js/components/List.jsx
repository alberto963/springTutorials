// src/js/components/List.js
import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { list: state.list }
}

const ConnectedList = ({ list }) => (
  <ul className="list-group list-group-flush">
    {list.map(elem => (
      <li className="list-group-item" key={elem.id}>
        {elem.title}
      </li>
    ))}
  </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List;