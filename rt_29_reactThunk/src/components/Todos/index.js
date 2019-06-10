
import React from 'react'
import { compose, pure } from 'recompose' // I tried not to use it, but did not find a way to compose withStyles
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { getData } from '../../actions'
import { Panel } from './Panel'
import { ContextProvider } from './Context'

const Todos = props =>
  <ContextProvider value={props}>
    <Panel />
  </ContextProvider>

const mapStateToProps = ({options, data}) => (
  {
    lastId: options.panel2.id,
    json: data.panel2.json
  }
)

const mapDispatchToProps = {
  getData
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
})

// export default withStyles(styles)(Todos)
// export default connect(mapStateToProps, mapDispatchToProps)(styledTodos)
// export default connect(mapStateToProps, mapDispatchToProps) (pure()(withStyles(styles)(Todos))

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
  withStyles(styles)
)(Todos)


