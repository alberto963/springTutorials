import * as React from 'react'
import { withHandlers } from 'recompose'

export const withOnClick = withHandlers({
  addTile: ({handlers}) => s => handlers.addTile(s),
  remTile: ({handlers}) => s => handlers.remTile(s)
})

const Tile = p =>
  <div id='TileWrapper' style={{width: '450px', height: '300px', padding: '2px', border: 'none 1px deeppink'}}>
    <header id='TileCommands' style={{display: 'flex', flexDirection: 'row',  padding: '2px', border: 'dotted 1px'}}>
      <div style={{alignItems: 'center', justifyContent: 'center', border: 'dotted 1px'}}>
        {p.stat.title} id={p.id}
      </div>
      <div style={{marginLeft: 'auto', border: 'dotted 1px'}} onClick={() => p.addTile(p.stat)}>
        Add
      </div>
      <div style={{marginLeft: 'auto', border: 'dotted 1px'}} onClick={() => p.remTile(p.stat)}>
        Rem
      </div>
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

export default withOnClick(Tile)
