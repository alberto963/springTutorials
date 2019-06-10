import React from 'react'

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Todos from './Todos'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch'

const Routes = () => 
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/todos">jsonplaceholder todos test client</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={Todos} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>

export default Routes
