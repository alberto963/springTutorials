// src/js/components/FormAsComponent.js
import React, { Component } from "react"
import { connect } from "react-redux"
import uuidv1 from "uuid"

import { addElem2 } from "../actions/index"

const mapDispatchToProps = dispatch => {
  return {
    addElem: elem => dispatch(addElem2(elem))
  }
}

class WrappedForm extends Component {

  render() {
    return (
      <button className="new-button" title="new" onClick={() => {
            const id = uuidv1();
            this.props.addElem({ title: 'new ', id })
          }
        } />
    )
  }
}

const FormAsComponent = connect(null, mapDispatchToProps)(WrappedForm);

export default FormAsComponent;