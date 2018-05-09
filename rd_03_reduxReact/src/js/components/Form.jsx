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

const UnconnectedForm = (props) => (

      <button className="my-button" onClick={() => {
            // console.log('my button clicked!!!')
            const id = uuidv1();
            props.addElem({ title: ('new ' + id), id })
          }
        } />
    )

const Form = connect(null, mapDispatchToProps)(UnconnectedForm);

export default Form;