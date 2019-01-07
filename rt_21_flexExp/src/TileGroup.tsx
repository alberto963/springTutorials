import * as React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import Tile from './Tile'

const withZoom = withState('z' , 'setZ', 0)
const withCounter = withState('c' , 'setC', ({stat}) => stat.length)
const withTiles = withState('tiles' , 'setTiles', ({stat}) => stat)

const withOnClick = withHandlers({
  addTile: ({setTiles, tiles, setC}) => s => {
    setTiles([...tiles, {...s}])
    setC(c => c + 1)
  },
  remTile: ({setTiles, tiles, setC}) => s => {
    if (tiles.length > 1) {
      tiles.splice(tiles.indexOf(s), 1)
      setTiles([...tiles])
      setC(c => c - 1)
    }
  },
  zoomIn: ({setZ}) => setZ(z => z + 1),
  zoomOut: ({setZ}) => setZ(z => z - 1)
})

const TileGroup = p =>
  <div style={{padding: '5px', border: 'dotted 1px green'}}>
    <header style={{display: 'flex', flexDirection: 'row',  padding: '2px', border: '1px teal'}}>
      <div style={{alignItems: 'center', justifyContent: 'center', border: 'none dotted 1px'}}>
        {p.title} zoom={p.z} counter={p.c}
      </div>
      <div style={{marginLeft: 'auto', border: 'dotted 1px'}} onClick={p.zoomIn}>
        Zoom In
      </div>
      <div style={{marginLeft: 'auto', border: 'dotted 1px'}} onClick={p.zoomOut}>
        Zoom Out
      </div>
    </header>
    <article style={{display: 'flex', flexFlow: 'row wrap', height: '91%', justifyContent: 'space-around', alignItems: 'center', border: 'dotted 1px darkorchid'}}>
      {p.tiles.map((s, id) => {
        return <Tile stat={s} key={id} id={id} handlers={{addTile: p.addTile, remTile: p.remTile}} />
      })}
    </article>
  </div>

export default compose(withTiles, withZoom, withCounter, withOnClick)(TileGroup)
