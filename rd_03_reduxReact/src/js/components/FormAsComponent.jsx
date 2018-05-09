// src/js/components/FormAsComponent.js
import React, { Component } from "react"
import { connect } from "react-redux"
import uuidv1 from "uuid"

import { addElem } from "../actions/index"

const mapDispatchToProps = dispatch => {
  return {
    addElem: elem => dispatch(addElem(elem))
  }
}

class UnconnectedForm extends Component {

  render() {
    return (
      <button className="my-button" onClick={() => {
            // console.log('my button clicked!!!')
            const id = uuidv1();
            this.props.addElem({ title: ('new ' + id), id })
          }
        } />
    )
  }
}

const Form = connect(null, mapDispatchToProps)(UnconnectedForm);

export default FormAsComponent;