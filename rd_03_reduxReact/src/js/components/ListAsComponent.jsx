// src/js/components/ListAsComponent.js
import React, { Component } from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { list2: state.elems.list2 }
}

class WrappedList extends Component {

  render() {
    return (
      <ol className="list-group list-group-flush">
        {this.props.list2.map(elem => (
          <li className="list-group-item" key={elem.id}>
            {elem.title}
          </li>
        ))}
      </ol>
    )
  }
}

const ListAsComponent = connect(mapStateToProps, null)(WrappedList)

export default ListAsComponent;