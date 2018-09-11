import React from "react"
import ReactDOM from 'react-dom'

import mapProps from 'recompose/mapProps'

import './index.css'

const User = ({ name, status }) =>
  <div className="User">{ name }—{ status }</div>

  // Why user.map? because we need to 'generate' a User HTML component for every user in users js array
  // Why in <User {...user} /> '...' is used? It is the destructuring operator, it is used because User component has two props, named 'name and 'status'
const UserList = ({ users, status }) =>
  <div className="UserList">
    <h3>{ status } users</h3>
    { users && users.map(user => <User {...user} />) }
  </div>

const users = [
  { name: "Tim", status: 'active' },
  { name: "Bob", status: 'active' },
  { name: "Joe", status: 'active' },
  { name: "Joe", status: 'inactive' },
  { name: "Jim", status: 'inactive' },
]

const filterByStatus = status => mapProps(
  ({ users }) => ({
    status,
    users: users.filter(u => u.status === status)
  })
)

const filterByName = name => mapProps(
  ({ users }) => ({
    status: name,
    users: users.filter(u => u.name === name)
  })
)

const passThrough = () => mapProps(
  ({ users }) => ({ status: 'passthrough', users }))

const AllUsers = passThrough()(UserList)
const AllJoeUsers = filterByName('Joe')(UserList)
const ActiveUsers = filterByStatus('active')(UserList)
const InactiveUsers = filterByStatus('inactive')(UserList)
const PendingUsers = filterByStatus('pending')(UserList)

const App = () =>
  <div className="App">
    <AllUsers users={ users }/>
    <AllJoeUsers users={ users }/>
    <UserList users={ users } status='UserList'/>
    <ActiveUsers users={ users } />
    <InactiveUsers users={ users } />
    <PendingUsers users={ users } />
  </div>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)