// src/js/components/AppWithComponent.js
import React from "react"
import List from "./ListAsComponent.jsx"
import Form from "./FormAsComponent.jsx"

const AppWithComponent = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Stateless React Component (redux is used)</h2>
      <Form />
      <List />
    </div>
  </div>
)

export default AppWithComponent;