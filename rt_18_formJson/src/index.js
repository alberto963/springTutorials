import React from 'react'
import ReactDOM from 'react-dom'

import { Field, reduxForm } from 'redux-form'

import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import { Values } from 'redux-form-website-template'

const LOAD = 'redux-form-examples/account/LOAD'

const account = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data,
      }
    default:
      return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
const loadAccount = data => ({ type: LOAD, data })

const reducer = combineReducers({
  account,
  form: reduxFormReducer, // mounted under 'form'
})

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

let InitializeFromStateForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>Form to be implemented...</div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState' // a unique identifier for this form
})(InitializeFromStateForm)

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.account.data // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(InitializeFromStateForm)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const showResults = async function(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>Initialize From State</h2>
      <InitializeFromStateForm onSubmit={showResults} />
      <Values form='initializeFromState' />
    </div>
  </Provider>,
  document.getElementById('root')
)

