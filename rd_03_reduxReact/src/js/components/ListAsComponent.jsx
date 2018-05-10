// src/js/components/ListAsComponent.js
import React, { Component } from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { list: state.list2 }
}

class UList extends Component {

  render() {
    return (
      <ol className="list-group list-group-flush">
        {this.props.list.map(elem => (
          <li className="list-group-item" key={elem.id}>
            {elem.title}
          </li>
        ))}
      </ol>
    )
  }
}

const List = connect(mapStateToProps, null)(UList)

export default List;