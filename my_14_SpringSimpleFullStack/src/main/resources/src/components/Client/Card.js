import React, { useContext }  from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Context from './Context'

export const Card = () =>  {

  const {classes, lastId, card, loading} = useContext(Context)
  const {paper, color} = classes

  return (
    <Paper className={loading ? color : paper}>
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