// src/js/components/Form.js
import React from "react"
import { connect } from "react-redux"
import uuidv1 from "uuid"

import { addElem } from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return { 
    propNum: state.numbers.num,
    propAccept: ownProps.accept,
  }
}

/*
 * mapDispatchToProps with explicit dispatch call
 */
// const mapDispatchToProps = dispatch => {
//   return {
//     addElem: elem => dispatch(addElem(elem)),
//   }
// }

/*
 * Simplified (in code syntax) mapDispatchToProps 
 */
const mapDispatchToProps = {
  addElem,
}

const UForm = (props) => {
  // console.info('UForm props=', props)

  return (

    <button className="new-button" title="new" onClick={() => {
          const id = uuidv1()
          const title = 'new '
          props.addElem({ title, id })
        }
      }>{props.accept ? props.propNum : null}</button>
  )
}

  const Form = connect(mapStateToProps, mapDispatchToProps)(UForm)

export default Form;