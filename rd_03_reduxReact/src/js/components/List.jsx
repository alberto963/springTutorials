// src/js/components/List.js
import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { list: state.list }
}

const UList = ({ list }) => (
  <ol className="list-group list-group-flush">
    {list.map(elem => (
      <li className="list-group-item" key={elem.id}>
        {elem.title}
        <button className="del-button" title="del" onClick={() => {
          }
        } />
      </li>
    ))}
  </ol>
)

const List = connect(mapStateToProps, null)(UList)

export default List;