import React from 'react'

const Form = (props) => (
  <div>
    <button className="set-button" title="X" onClick={() => { props.set(props.id, 0) }}>{props.initial}</button>
    <br />
  </div>
)

export default Form
