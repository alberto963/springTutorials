import React from 'react'

import { Router  } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Todo from './Todo'
import Home from './Home'
import About from './About'
import User from './User'
import NoMatch from './NoMatch'

const Routes = () => 
  <Router history={ {location: '/' }}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route exact path='/todo' component={Todo}/>
      <Route path='/:user' component={User}/>
      <Route component={NoMatch}/>
    </Switch>
  </Router>
export default Routes
