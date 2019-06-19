
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { getData } from '../../actions'
import { Panel } from './Panel'
import { ContextProvider } from './Context'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  color: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: 'yellow'
  },
  margin: {
    margin: theme.spacing(1),
  },
})

const Client = props =>
  <ContextProvider value={props}>
    <Panel />
  </ContextProvider>

const mapStateToProps = ({options, data}, {panel}) => (
  {
    lastId: options[panel] ? options[panel].id : 1,
    loading: options[panel] ? options[panel].loading : false,
    card: data[panel] ? data[panel].card : ''
  }
)

const mapDispatchToProps = {
  getData
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Client))
