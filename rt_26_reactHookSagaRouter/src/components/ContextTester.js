
import React, { useState, useEffect, useCallback, useContext } from 'react'
import { compose, pure } from 'recompose' // I tried not to use it, but did not find a way to compose withStyles
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { getDataP2 } from '../actions'

const Context = React.createContext()

const Card = () =>  {

  const {classes, json, lastId} = useContext(Context)
  const {paper} = classes

  return (
    <Paper className={paper}>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item>
          <Avatar>{json.id ? json.id : lastId}</Avatar>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography noWrap>{json.title}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

const Controls = () => {

  const {classes, lastId, getData} = useContext(Context)
  const {paper, margin} = classes
  const [id, setId] = useState(lastId)

  useEffect(() => {
    document.title = `id ${id}`
    getData(id)
  }, [id]) 

  return (
    <Grid item xs={12}>
      <Grid className={paper} container>
        <Grid item>
        <Button variant='outlined' size='medium' color='primary' className={margin} onClick={useCallback(() => setId(id - 1), [id])}>
          Previous
        </Button>
        <Button variant='outlined' size='medium' color='primary' className={margin} onClick={useCallback(() => setId(id + 1), [id])}>
          Next
        </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

const ContextPanel = () => 
  <div className={useContext(Context).classes.root}>
    <Card />
    <Controls />
  </div>

const ContextTester = (props) =>
  <Context.Provider value={props}>
    <ContextPanel />
  </Context.Provider>

const mapStateToProps = ({options, data}) => (
  {
    lastId: options.idP2,
    json: data.jsonP2
  }
)

const mapDispatchToProps = {
  getData: getDataP2,
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


