import React from 'react'
import ReactDOM from 'react-dom'

import { Field, reduxForm } from 'redux-form'

import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { Provider } from 'react-redux'

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under 'form'
})
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: 5 }} >
        <label style={{ padding: 15 }} htmlFor='firstName'>First Name</label>
        <Field name='firstName' component='input' type='text' />
      </div>
      <div style={{ padding: 5 }}>
        <label style={{ padding: 15 }} htmlFor='lastName'>Last Name</label>
        <Field name='lastName' component='input' type='text' />
      </div>
      <div style={{ padding: 5 }}>
        <label style={{ padding: 31 }} htmlFor='email'>Email</label>
        <Field name='email' component='input' type='email' />
      </div>
      <button style={{ margin: 15 }} type='submit'>Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <ContactPage />
    </div>
  </Provider>,
  document.getElementById('root')
)