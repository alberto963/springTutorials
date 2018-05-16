// src/js/components/Form.js
import React from "react"
import { connect } from "react-redux"
import uuidv1 from "uuid"

import { addElem } from "../actions/index"

/*
 * In commented code ownProps is explicitly given, allowing to map some of the component props.
 * If not given, component props ('accept' props in this case) are mapped by default.
 * If given it is possible to use mapped name ('propAccept' in this case) in components
 */
//const mapStateToProps = (state, ownProps) => {
  const mapStateToProps = (state) => {
    return { 
    propNum: state.numbers.num,
//    propAccept: ownProps.accept,
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

// const mergeProps = (state, dispatch, ownProps) => {
//   return { 
//     propNum: state.propNum,
//     addElem: dispatch.addElem,
//     initial: ownProps.initial,
//   }
// }

const WrappedForm = (props) => {
  // console.info('WrappedForm props=', props)

  return (

  <div>
    <button className="new-button" title="new" onClick={() => {
          const id = uuidv1()
          const title = 'new '
          props.addElem({ title, id })
        }
      }>{props.accept ? props.propNum : null}</button>

      <button className="new-button" title="ro">{props.initial}</button>
    </div>
  )
}

// const Form = connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedForm)
const Form = connect(mapStateToProps, mapDispatchToProps)(WrappedForm)

export default Form;