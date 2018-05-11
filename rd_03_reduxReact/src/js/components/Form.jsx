// src/js/components/Form.js
import React from "react"
import { connect } from "react-redux"
import uuidv1 from "uuid"

import { addElem } from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return { 
    propNum: state.numbers.num 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    propAddElem: elem => dispatch(addElem(elem))
  }
}

const UForm = (props) => {
  // console.info('UForm props=', props)

  return (

      <button className="new-button" title="new" onClick={() => {
            const id = uuidv1();
            const title = 'new ';
            props.propAddElem({ title, id })
          }
        }>{props.propNum}</button>
    )
  }

const Form = connect(mapStateToProps, mapDispatchToProps)(UForm);

export default Form;