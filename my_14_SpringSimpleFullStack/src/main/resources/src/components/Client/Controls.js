import React, { useContext, useState, useEffect, useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Context from './Context'

export const Controls = () => {

  const {classes, lastId, getData, panel, loading} = useContext(Context)
  const {paper, margin} = classes
  const [id, setId] = useState(lastId)

  useEffect(() => {
    document.title = `${panel} id ${id}`
    getData(id, panel)

    return () => document.title = ``
  }, [id, getData, panel]) 

  return (
    <Grid item xs={12}>
      <Grid className={paper} container>
        <Grid item>
        <Button variant='outlined' size='medium' color='primary' className={margin} disabled={loading}
                onClick={useCallback(() => setId(id - 1), [id])}>
          Previous
        </Button>
        <Button variant='outlined' size='medium' color='primary' className={margin} disabled={loading}
                onClick={useCallback(() => setId(id + 1), [id])}>
          Next
        </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
