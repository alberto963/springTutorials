import React from "react"
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom"

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

const NoMatchExample = () => (
  <Router>
    <div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/old-match">Old Match, to be redirected</Link>
        </li>
        <li>
          <Link to="/will-match">Will Match</Link>
        </li>
        <li>
          <Link to="/will-match1">Will Match1</Link>
        </li>
        <li>
          <Link to="/will-not-match">Will Not Match</Link>
        </li>
        <li>
          <Link to="/also/will/not/match">Also Will Not Match</Link>
        </li>
        <li>
          <Link to="/no-switch">No switch route page</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="/old-match" to="/will-match" />
        <Route path="/will-match1" component={WillMatch1} />
        <Route path="/will-match*" component={WillMatchStar} />
        <Route path="/no-switch*" component={NoSwitch} />
        <Route component={NoMatch} />
      </Switch>
      
    </div>
  </Router>
)

const Home = () => (
  <p>
    A <code>&ltSwitch></code> renders the first child <code>&ltRoute></code>{" "}
    that matches. A <code>&ltRoute></code> with no <code>path</code> always
    matches.
  </p>
)

const WillMatch1 = ({ location }) => <h3>Matched 1 {location.pathname}!</h3>

const WillMatchStar = ({ location }) => <h3>Matched star {location.pathname}!</h3>

const NoSwitch = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/old-match">Old Match, to be redirected</Link>
        </li>
        <li>
          <Link to="/will-match">Will Match</Link>
        </li>
        <li>
          <Link to="/will-match1">Will Match1</Link>
        </li>
        <li>
          <Link to="/will-not-match">Will Not Match</Link>
        </li>
        <li>
          <Link to="/also/will/not/match">Also Will Not Match</Link>
        </li>
      </ul>

        <Route path="/" exact component={Home} />
        <Redirect from="/old-match" to="/will-match" />
        <Route path="/will-match1" component={WillMatch1} />
        <Route path="/will-match*" component={WillMatchStar} />
        <Route component={NoMatch} />
      
    </div>
  </Router>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)

ReactDOM.render(
  <NoMatchExample />,
  document.getElementById('root')
)