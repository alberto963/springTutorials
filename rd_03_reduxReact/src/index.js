import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from "react-redux"



import  SimplestApp  from "./SimplestApp.jsx"
import  StatefulComponent  from "./StatefulComponent.jsx"

import store from "./js/store/index"
import App from "./js/components/App"

import "./main.css"

ReactDOM.render(
  <div>
    <SimplestApp />
    <StatefulComponent />
    <Provider store={store}><App /></Provider>
  </div>,
   document.getElementById('app')
  )
