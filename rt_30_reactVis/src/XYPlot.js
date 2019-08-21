import React from 'react'
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

function generateData() {
  return [...new Array(10)].map(row => ({
    x: Math.random() * 5,
    y: Math.random() * 10
  }))
}

const MODE = ['noWobble', 'gentle', 'wobbly', 'stiff']

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
  },
}))

const defaultProps = {
  bgcolor: 'background.paper',
  style: { width: '310px', height: '310px' },
  borderColor: 'text.primary',
}

const MyXYPlot = props => {

  const [state, setState] = React.useState({
    data: generateData(),
    modeIndex: 0,
    classes: useStyles()
  })

  const updateModeIndex = React.useCallback(increment => () => {
    const newIndex = state.modeIndex + (increment ? 1 : -1)
    const modeIndex = newIndex < 0 ? MODE.length - 1 : newIndex >= MODE.length ? 0 : newIndex
    setState({ ...state, modeIndex })
  }, [state])

  const {modeIndex, data, classes} = state

  return <div className='centered-and-flexed'>
      <div className='centered-and-flexed-controls'>
        <Button className={classes.button}
          onClick={updateModeIndex(false)}
          buttonContent={'PREV'}
        />
        <div> {`ANIMATION TECHNIQUE: ${MODE[modeIndex]}`} </div>
        <Button className={classes.button}
          onClick={updateModeIndex(true)}
          buttonContent={'NEXT'}
        />
      </div>
      <Box border={1} {...defaultProps}>
      <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries animation={MODE[modeIndex]} data={data} />
      </XYPlot>
      </Box>
      <Button className={classes.button}
        onClick={() => setState({...state, data: generateData()})}
        buttonContent={'UPDATE DATA'}
      />
    </div>
}

export default MyXYPlot