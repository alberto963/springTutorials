import * as React from 'react'
import TileGroup from './TileGroup'
import structs from './StatsSpecs'

const StatsPanel = p =>
  <div id='MainContainer' style={{margin: '10px', padding: '10px', border: 'dotted 1px coral',
            display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', alignItems: 'center',
            minWidth: '500px', minHeight: '800px'}}>
    {p.datasets.map((ds, id) => <TileGroup title={ds} stat={structs()[ds]} id={id} key={id} />)}
  </div>

export default StatsPanel
