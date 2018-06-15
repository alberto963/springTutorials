// src/js/components/App.js
import React from "react"
import Form from "./Form.jsx"
import { incNum, setNum } from "../actions/index"
import { connect } from "react-redux"

const mapStateToProps = state => ({
  forms: state.app
})

const mapDispatchToProps = {
  setNum, incNum
}

const App = (props) => {
  return (
    <div className="row mt-7">
      <button className="new-button" title="X" onClick={() => props.incNum(1)}>X</button>
      <h2>List of components</h2>
      <div className="col-md-8 offset-md-3">
        {props.forms.map(form =>
          <Form key={form.id} id={form.id} initial={form.initial} discriminator={form.discriminator} set={props.setNum} />
        )}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
