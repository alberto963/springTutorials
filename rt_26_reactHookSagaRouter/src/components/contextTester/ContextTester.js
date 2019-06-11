
import React from 'react'
import { compose, pure } from 'recompose' // I tried not to use it, but did not find a way to compose withStyles
// Solution can be found in rt_29, after reading https://stackoverflow.com/questions/45704681/react-material-ui-export-multiple-higher-order-components/45705291#45705291
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { getData } from '../../actions'
import { ContextPanel } from './ContextPanel'
import { ContextProvider } from './Context'

const ContextTester = props =>
  <ContextProvider value={props}>
    <ContextPanel />
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

// export default withStyles(styles)(ContextTester)
// export default connect(mapStateToProps, mapDispatchToProps)(styledContextTester)
// export default connect(mapStateToProps, mapDispatchToProps) (pure()(withStyles(styles)(ContextTester))

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
  withStyles(styles)
)(ContextTester)


