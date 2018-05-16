// src/js/components/App.js
import React from "react"
import List from "./List.jsx"
import Form from "./Form.jsx"

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Stateless React Functions Components (redux is used)</h2>
      <Form accept={true} initial={7}/>
      <List inc={2} />
    </div>
  </div>
)

export default App;