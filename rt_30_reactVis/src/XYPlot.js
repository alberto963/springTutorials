import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from './Button'

import Box from '@material-ui/core/Box'

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from 'react-vis'

const DELAY = 10

const generateData = () => [...new Array(10)].map((r, x) => ({
    x: Math.random() * 10,
    y: Math.random() * 10
  }))
 
const MODE = ['noWobble', 'gentle', 'wobbly', 'stiff']

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
  },
  box: {
    width: '310px', 
    height: '310px',
    borderColor: 'grey',
  }
}))

const MyXYPlot = props => {

  const [state, setState] = useState({
    data: generateData(),
    loading: true,
    modeIndex: 2
  })

  useEffect(() => {
    setTimeout(() => setState({...state, loading: false}), DELAY)
  }, [state.loading])

  const updateModeIndex = useCallback(increment => () => {
    const newIndex = state.modeIndex + increment 
    const modeIndex = newIndex < 0 ? MODE.length - 1 : newIndex % MODE.length
    setState({ ...state, modeIndex })
  }, [state.modeIndex])

  const updatedata = useCallback(() => {
    // setState({...state, loading: true, data: generateData()})
    // setTimeout(() => setState({...state, loading: false}), DELAY)
    setState({...state, data: generateData()})
  }, [state])

  const {modeIndex, loading, data} = state

  const classes = useStyles()

  return <div className='centered-and-flexed'>
      <div className='centered-and-flexed-controls'>
        <Button className={classes.button}
          onClick={updateModeIndex(-1)}
          buttonContent={'PREV'}
        />
        <div> {`ANIMATION TECHNIQUE: ${MODE[modeIndex]}`} </div>
        <Button className={classes.button}
          onClick={updateModeIndex(+1)}
          buttonContent={'NEXT'}
        />
      </div>
      <Box className={classes.box} border={1} bgcolor='primary.main'>
        {loading && <div className={classes.button}>Loading...</div>}
        {!loading && <XYPlot width={300} height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries animation={MODE[modeIndex]} data={data} />
        </XYPlot>}
      </Box>
      <Button className={classes.button}
        onClick={updatedata}
        buttonContent={'UPDATE DATA'}
      />
    </div>
}

export default MyXYPlot