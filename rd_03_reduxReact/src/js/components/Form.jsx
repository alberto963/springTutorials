// src/js/components/Form.js
import React from "react"
import { connect } from "react-redux"
import uuidv1 from "uuid"

import { addElem } from "../actions/index"

const mapDispatchToProps = dispatch => {
  return {
    addElem: elem => dispatch(addElem(elem))
  }
}

const UForm = (props) => (

      <button className="my-button" title="new" onClick={() => {
            const id = uuidv1();
            props.addElem({ title: 'new ', id })
          }
        } />
    )

const Form = connect(null, mapDispatchToProps)(UForm);

export default Form;