import React from 'react'

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import Todos from './Todos'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const Routes = () => {
  const classes = useStyles()

  return (
    <Typography component='div' style={{ padding: 8 * 3 }}>
      <Router>
      <div className={classes.root}>
        <AppBar position='static'>
          <Tabs variant='fullWidth' value={'/'}>
            <Tab label='Home' component={Link} to='/' />
            <Tab label='Todos' component={Link} to='/todos' />
            <Tab label='About' component={Link} to='/about' />
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/todos' component={Todos} />
          <Route path='/about' component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </Router>
    </Typography>
  )
}

export default Routes
