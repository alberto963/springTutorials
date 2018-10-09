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

const data = {
  // used to populate 'account' reducer when 'Load' is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  sex: 'female',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
}
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

let InitializeFromStateForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type='button' onClick={() => load(data)}>
          Load Account
        </button>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name='firstName'
            component='input'
            type='text'
            placeholder='First Name'
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name='lastName'
            component='input'
            type='text'
            placeholder='Last Name'
          />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name='age' component='input' type='number' placeholder='Age' />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name='sex'
              component='input'
              type='radio'
              value='male'
            />{' '}
            Male
          </label>
          <label>
            <Field
              name='sex'
              component='input'
              type='radio'
              value='female'
            />{' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name='favoriteColor' component='select'>
            <option value=''>Select a color...</option>
            {colors.map(colorOption => (
              <option value={colorOption} key={colorOption}>
                {colorOption}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor='employed'>Employed</label>
        <div>
          <Field
            name='employed'
            id='employed'
            component='input'
            type='checkbox'
          />
        </div>
      </div>
      <div>
        <label>Bio</label>
        <div>
          <Field name='bio' component='textarea' />
        </div>
      </div>
      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState' // a unique identifier for this form
})(InitializeFromStateForm)



const mapStateToProps = state => {
  return {
    initialValues: state.account.data // pull initial values from account reducer
  }
}

const mapDispatchToProps = {
  load: loadAccount,
}

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'initializeFromState'})(InitializeFromStateForm))



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

