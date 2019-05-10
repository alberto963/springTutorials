import React from "react"
import ReactDOM from 'react-dom'

import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis'

import './index.css'

const fetchData = () => new Promise(resolve => setTimeout(() => resolve({ name: "Tim", status: "active" }), 1500))

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

const isLoading = ({loading}) => loading

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
)

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading
)

const NoSpinnerUser = ({name, status}) =>
  <div className="User" style={{margin: '24px', height: '100px', width: '100px' }}>
    <span style={{margin: '6px'}}>{name}</span>
    <span style={{margin: '6px'}}>{status}</span>
  </div>

const UserWithSpinner = enhance(NoSpinnerUser)

const User = enhance(({name, status}) =>
  <div className="User">
    <span style={{margin: '6px'}}>{name}</span>
    <span style={{margin: '6px'}}>{status}</span>
  </div>
)

const App = () =>
  <div>
    <NoSpinnerUser name='no spinner'/>
    <UserWithSpinner />
    <User />
    <XYPlot width={300} height={300}>
      <HorizontalGridLines />
      <LineSeries data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]} />
      <XAxis />
      <YAxis />
    </XYPlot>
  </div>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)