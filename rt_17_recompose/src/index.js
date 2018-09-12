import React from "react"
import ReactDOM from 'react-dom'

import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'

import './index.css'

const withUserData = lifecycle({
  state: { loading: true },
  componentDidMount() {
    fetchData().then((data) =>
      this.setState({ loading: false, ...data }))
  }
})

const Spinner = () =>
  <div className="Spinner">
    <div className="loader">Loading...</div>
  </div>

const isLoading = ({ loading }) => loading

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
)

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading
)

const NoSpinnerUser = ({ name, status }) =>
  <div className="User">{ name }—{ status }</div>

const UserWithSpinner = enhance(NoSpinnerUser)

const User = enhance(({ name, status }) =>
  <div className="User">{ name }—{ status }</div>
)

const App = () =>
  <div>
    <NoSpinnerUser />
    <UserWithSpinner />
    <User />
  </div>

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Tim", status: "active" }), 1500)
  })
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)