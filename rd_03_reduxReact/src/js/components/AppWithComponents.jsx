// src/js/components/AppWithComponent.js
import React from "react"
import ListAsComponent from "./ListAsComponent.jsx"
import FormAsComponent from "./FormAsComponent.jsx"

const AppWithComponent = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Stateless React Component (redux is used)</h2>
      <FormAsComponent />
      <ListAsComponent />
    </div>
  </div>
)

export default AppWithComponent;