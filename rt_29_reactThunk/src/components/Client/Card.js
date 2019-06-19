import React, { useContext }  from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Context from './Context'

export const Card = () =>  {

  const {classes, lastId, card, loading, timeout} = useContext(Context)
  const {paper, paperLoading, paperTimeout} = classes

  return (
    <Paper className={loading ? timeout ? paperTimeout : paperLoading : paper}>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item>
          <Avatar>{lastId}</Avatar>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography noWrap>{card}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}