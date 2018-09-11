import React from "react"
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import compose from 'recompose/compose'
import withReducer from 'recompose/withReducer'
import withHandlers from 'recompose/withHandlers'
import getDisplayName from 'recompose/getDisplayName'

import './index.css'

const store = createStore((state, action) => state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const initialState = {s: false, t: false, selected: null}

const reducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE':
      return {...state, s: !state.s};
    case 'SHOW':
      return {...state, t: true};
    case 'HIDE':
      return {...state, t: false};
    case 'SELECT':
      return {...state, selected: action.payload};
    default:
      return state;
  }
}
const toggle = ({ dispatch }) => (e) => dispatch({ type: 'TOGGLE' })
const show = ({ dispatch }) => (e) => dispatch({ type: 'SHOW' })
const hide = ({ dispatch }) => (e) => dispatch({ type: 'HIDE' })
const select = ({ dispatch }) => (e, s) => dispatch({ type: 'SELECT', payload: s })

const withToggle = compose(
  withReducer('toggledOn', 'dispatch', reducer, initialState),
  withHandlers({ toggle, show, hide, select}),
  connect()
)

const StatusListFactory = compose(
  withReducer('selected', 'dispatch', reducer, initialState),
  withHandlers({ select }),
)

const StatusList = StatusListFactory(({select}) => 
  <div className="StatusList">
     <div onClick={select}>pending</div>
     <div onClick={select}>inactive</div>
     <div onClick={select}>active</div>
   </div>
)

// const StatusList = (select) =>
//   <div className="StatusList">
//     <div onClick={select}>pending</div>
//     <div>inactive</div>
//     <div>active</div>
//   </div>

const Status = withToggle(({ toggledOn, status, toggle, select }) =>
  <span>
    <span onClick={ toggle }>
      { status }
    </span>
    <span>
      { toggledOn.s && <StatusList select={ select } /> }
    </span>
  </span>
)

const Tooltip = withToggle(({ show, hide, text, children, toggledOn }) =>
  <span>
    { toggledOn.t && <div className="Tooltip">{ text }</div> }
    <span onMouseEnter={ show } onMouseLeave={ hide }>{ children }</span>
  </span>
)

const User = ({ name, status }) =>
  <div className="User">
    <Tooltip text="Cool Dude!">{ name }</Tooltip>
    (—)
    <Tooltip text="Hey what?">{ status }</Tooltip>
     (—)
    <Status status={ status } />
  </div>

const App = () =>
  <Provider  store={store}>
    <User name="Tim" status="active" />
  </Provider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

console.log('Status display name: ' + getDisplayName(Status))
console.log('Tooltip display name: ' + getDisplayName(Tooltip))
console.log('User display name: ' + getDisplayName(User))

