
import React, { useEffect } from 'react'
import { compose, pure } from 'recompose'
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

const ContextTester = ({classes, getData, json, lid}) => {

  useEffect(() => {
    document.title = `id ${lid} Ready`

    getData(lid)
  }, [lid])  

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{json.title}</Typography>
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

// export default withStyles(styles)(ContextTester)

// export default connect(mapStateToProps, mapDispatchToProps)(styledContextTester)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
  withStyles(styles)
)(ContextTester)

