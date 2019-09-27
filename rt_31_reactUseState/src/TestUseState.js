import React, { useState, useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from './Button'

const DELAY = 3000

const generateData = (t0) => {
   console.info(dt(t0) + 'generateData')
   return  [...new Array(10)].map((r, x) => ({
    x: Math.random() * 10,
    y: Math.random() * 10
  }))
}
 
const MODE = ['0', '1', '2', '3']

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

const t = () => Math.floor(Date.now() / 1000)
const dt = t0 => (t() - t0) + ' :: '
const t0 = t()

const TestUseState = props => {

  const [state, setState] = useState({
    data: [],
    loading: true,
    modeIndex: 2
  })

  console.info(dt(t0) + 'TestUseState state=', state)

  useEffect(() => {
      console.info(dt(t0) + 'useEffect IN state=', state)

      setTimeout(() => {
        console.info(dt(t0) + 'setTimeout IN state=', state)
        const newState = {...state, loading: false, data: generateData(t0)}
        console.info(dt(t0) + 'setTimeout newState=', newState)
        setState(newState)
        console.info(dt(t0) + 'setTimeout OUT state=', state)
      }, DELAY)
      console.info(dt(t0) + 'useEffect OUT state=', state)

  }, [state.loading])

  const updateModeIndex = useCallback(increment => () => {
    const newIndex = state.modeIndex + increment 
    const newState = {...state,  modeIndex: newIndex < 0 ? MODE.length - 1 : newIndex % MODE.length}
    console.info(dt(t0) + 'updateModeIndex newState=', newState)
    setState(newState)
    console.info(dt(t0) + 'updateModeIndex state=', state)
  }, [state.modeIndex])

  const updatedata = useCallback(() => {
    const newState = {...state,  loading: true}
    console.info(dt(t0) + 'updatedata newState=', newState)
    setState({...state, loading: true})
    console.info(dt(t0) + 'updatedata state=', state)
  })

  const classes = useStyles()

  return <div className='centered-and-flexed'>
    <div className='centered-and-flexed-controls'>
      <Button className={classes.button}
        onClick={updateModeIndex(-1)}
        buttonContent={'PREV'}
      />
      <div> {`Mode: ${MODE[state.modeIndex]}`} </div>
        <Button className={classes.button}
          onClick={updateModeIndex(+1)}
          buttonContent={'NEXT'}
        />
      </div>
      <Button className={classes.button}
        onClick={updatedata}
        buttonContent={'UPDATE DATA'}
      />
    </div>
}

export default TestUseState