
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { getData } from '../actions'

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
})

const wordCounts = ({title=''}) => {
  console.info('Running wordCounts title=', title)

  return title !== '' ? title.split(' ').length : 0
}

const ContextTester = ({classes, getData, json, lid}) => {

  const [id, setId] = useState(lid)

  useEffect(() => {
    document.title = `id ${id} Ready`
    getData(id)

    return () => document.title = `id ${lid} Ready`
  }, [id])

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography noWrap>{json}</Typography>
        </Grid>
      </Grid>
    </Paper>
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs>
          <Typography noWrap>{json}</Typography>
        </Grid>
      </Grid>
    </Paper>
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs>
          <Typography>{json}</Typography>
        </Grid>
      </Grid>
    </Paper>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    lid: state.options.id,
    json: state.data.json
  }
}

const mapDispatchToProps = {
  getData,
}

export default withStyles(styles)(ContextTester)

// export default connect(mapStateToProps, mapDispatchToProps)(styledContextTester)
