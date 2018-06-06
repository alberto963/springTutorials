import React from 'react'
import ReactDOM from 'react-dom'
import { style, primaryColor, secondaryColor } from './style';

import './index.css'

function Sibling1() {

  function updateText(value){
    updateText2(value)
    updateText3(value)
  }

  return  <div>
            <div style={{ ...style.topLabel, color: secondaryColor }}>I am Sibling 1</div>
            <input style={style.textBox} type="text" placeholder="Write text" onChange={(e) => {updateText(e.target.value)}} />
          </div>
}

class Sibling2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: "Initial State S2" }
        updateText2 = updateText2.bind(this)
    }
    render() {
        return <div><div style={{ ...style.topLabel, color: primaryColor }}>I am Sibling 2</div><div style={style.label}>{this.state.text}</div></div>
    }
}

class Sibling3 extends React.Component {
  constructor(props) {
      super(props)
      this.state = { text: "Initial State S3" }
      updateText3 = updateText3.bind(this)
  }
  render() {
      return <div><div style={{ ...style.topLabel, color: primaryColor }}>I am Sibling 3</div><div style={style.label}>{this.state.text}</div></div>
  }
}

function updateText2(text) {
  this.setState({text})
}

function updateText3(text) {
  this.setState( { text: text.toUpperCase() })
}

function Example3() {
  return <div><Sibling1 /><Sibling2 /><Sibling3 /></div>
}

// ========================================
ReactDOM.render( <Example3 />, document.getElementById('root'))
