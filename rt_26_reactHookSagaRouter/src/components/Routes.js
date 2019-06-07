import React from 'react'

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import HookTester from './HookTester'
import ContextTester from './contextTester/ContextTester'
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
          <Link to="/hook">1) Test and Drill React Hooks</Link>
        </li>
        <li>
          <Link to="/context">2) Test and Drill React Context and Hooks Context</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/hook" component={HookTester} />
        <Route path="/context" component={ContextTester} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>

export default Routes
