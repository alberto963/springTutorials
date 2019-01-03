import * as React from 'react'
import { connect } from 'react-redux'
import { withState } from 'recompose'
import TileGroup from './TileGroup'
import structs from './StatsSpecs'

const withCounter = withState('c', 'getC', 0)

const mapStateToProps = testStructures => state => {
  return {
    stat: state.stat || testStructures,
  }
}

const StatsPanel = p => {
  const groups = p.datasets.map((ds, id) => <TileGroup title={ds} stat={p.stat[ds]} id={id} key={id} />)

  return (
    <div
      id='MainContainer'
      style={{margin: '10px', padding: '10px', border: 'dotted 1px coral',
              display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', alignItems: 'center',
              minWidth: '500px', minHeight: '800px'}}
    >
      {groups}
    </div>
  )
}

export default connect(mapStateToProps(structs()), null)(withCounter(StatsPanel))
