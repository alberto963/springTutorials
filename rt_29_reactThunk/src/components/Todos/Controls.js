import React, { useContext, useState, useEffect, useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Context from './Context'

export const Controls = () => {

  const {classes, lastId, getData} = useContext(Context)
  const {paper, margin} = classes
  const [id, setId] = useState(lastId)

  useEffect(() => {
    document.title = `id ${id}`
    getData(id, 'panel2')
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
