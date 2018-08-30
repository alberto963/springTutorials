import React from "react"
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import setPropTypes from 'recompose/setPropTypes'
import pure from 'recompose/pure'

import { createStore } from 'redux'

import { Provider, connect } from 'react-redux'

import './index.css'

const { Component } = React

const store = createStore((state, action) => state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// Attempt to set the name of the overriding component (shown in inspector as 'unknown')
// Not working, hence commented out, for further study
// const setName = name => bc => { bc['displayName'] = name return bc }

const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
  <BaseComponent {...props} {...overrideProps} />

// const alwaysBob = setName('overridden') (overrideProps({ name: 'Bob' }))

const alwaysBob = overrideProps({ name: 'Bob' })

const neverRender = (BaseComponent) =>
  class extends Component {
    shouldComponentUpdate() {
      return false
    }
    render() {
      return <BaseComponent {...this.props} />
    }
  }

const enhance = compose(
  setDisplayName('User'),
  setPropTypes({
    name: PropTypes.string.isRequired,
    status: PropTypes.string
  }),
  connect()
)

const User = enhance(({ name, status, dispatch }) =>
    <div className="User" onClick={
        () => dispatch({ type: "USER_SELECTED", payload: {name, status} })
      }>
      { name }: { status }
    </div>
)
const User2 = alwaysBob(User)
const User2P = pure(alwaysBob(User))
const User3 = neverRender(User)

const App = () =>
<Provider  store={store}>
    <div>
      <User name="Tim" status ='On' />
      <User2 name="Joe" status ='not pure' />
      <User2P name="Joe" status ='pure' />
      <User3 name="Steve" status ='On' />
    </div>
</Provider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)