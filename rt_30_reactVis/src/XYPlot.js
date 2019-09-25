import React, { useState, useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from './Button'
import Box from '@material-ui/core/Box'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, MarkSeries } from 'react-vis'

const DELAY = 1000

const generateData = () => {
  console.info('generateData')
 return  [...new Array(10)].map((r, x) => ({
    x: Math.random() * 10,
    y: Math.random() * 10
  }))
}
 
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
    data: [],
    loading: true,
    modeIndex: 2
  })

  const {modeIndex, loading, data} = state

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        const newState = {...state, loading: false, data: generateData()}
        console.info('setTimeout newState=', newState)
        setState(newState)
        console.info('setTimeout state=', state)
      }, DELAY)
    }
  }, [loading])

  const updateModeIndex = useCallback(increment => () => {
    const newIndex = modeIndex + increment 
    const newState = {...state,  modeIndex: newIndex < 0 ? MODE.length - 1 : newIndex % MODE.length}
    console.info('updateModeIndex newState=', newState)
    setState(newState)
    console.info('updateModeIndex state=', state)
  }, [modeIndex])

  const updatedata = useCallback(() => {
    const newState = {...state,  loading: true}
    console.info('updatedata newState=', newState)
    setState({...state, loading: true})
    console.info('updatedata state=', state)
  })

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