import * as React from 'react'
import { connect } from 'react-redux'
import { withOnClick } from './TileGroup'

//          <aside style={{flex: '1', height: '100%', border: 'dotted 1px darkgoldenrod'}} onClick={() => p.addTileR(p.stat)}>
//          export default connect(null, {addTileR: t => ({ type: "ADD_TILE", payload: t })})(Tile)

//          <aside style={{flex: '1', height: '100%', border: 'dotted 1px darkgoldenrod'}} onClick={p.addTile}>

const Tile = p => {
  return (
    <div
      id='TileWrapper'
      style={{width: '450px', height: '300px', padding: '2px', border: 'dotted 1px deeppink'}}
    >
      <header id='TileCommands' style={{border: 'dotted 1px'}} onClick={() => p.addTile(p.stat)}>
        {p.stat.title}
      </header>
      <div id='TileChartWrapper' style={{display: 'flex', flexDirection: 'row', height: '91%', padding: '2px', border: 'dotted 1px dodgerblue'}}>
        <article style={{flex: '2', height: '100%', border: 'dotted 1px blueviolet'}}>
          Chart
        </article>
        <aside style={{flex: '1', height: '100%', border: 'dotted 1px darkgoldenrod'}}>
          F. Area
        </aside>
      </div>
    </div>
  )
}

export default Tile
