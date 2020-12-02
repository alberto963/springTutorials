import React from 'react'

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs  from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import Client from './Client'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch'

import { panels } from '../conf'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const TabContainer = props => 
  <Typography component='div' style={{padding: 24}}>
    {props.children}
  </Typography>

const Routes = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <TabContainer>
      <Router>
      <div className={classes.root}>
        <AppBar position='static'>
          <Tabs variant='fullWidth' value={value} onChange={(e, v) => setValue(v)}>
            <Tab label='Home' component={Link} to='/' />
            {panels.map(t => <Tab key={t} label={t} component={Link} to={'/' + t} />)}
            <Tab label='About' component={Link} to='/about' />
          </Tabs>
        </AppBar>
        <TabContainer>
          <Switch>
            <Route exact path='/' component={Home} />
            {panels.map(t => <Route key={t} path={'/' + t} component={() => <Client panel={t} />} />)}
            <Route path='/about' component={About} />
            <Route component={NoMatch} />
          </Switch>
        </TabContainer>
      </div>
      </Router>
    </TabContainer>
  )
}

export default Routes
