import * as React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
import Tile from './Tile'
import structs from './StatsSpecs'


const withZoom = withState('z' , 'setZ', 0)
const withCounter = withState('c' , 'setC', p => p.stat.length)

const withTiles = withState('tiles' , 'setTiles', p => p.stat.map((s, id) => {
  return <Tile stat={s} key={id} />
}))

// const withTiles = withState('tiles' , 'setTiles', [])

export const withOnClick = withHandlers({
  addTile: ({setTiles}) => e => setTiles(tiles => [...tiles, (<Tile stat={structs().d4[0]} key={1} />)]),
  // remTile: ({setC}) => e => setC(c => c - 1),
  zoomIn: ({setZ}) => e => setZ(z => z + 1),
  zoomOut: ({setZ}) => e => setZ(z => z - 1)
})

const TileGroup = p => {

  // const addTile = t => {
  //   console.log('New Tile=', t)
  //   p.setC(c => c + 1)
  //   const newTile = <Tile stat={t} key={p.c} addTile={addTile}/>
  //   p.tiles.push(newTile)
  // }
  
  // if (p.tiles.length === 0) {
  //   const tiles = p.stat.map((s, id) => {
  //     return <Tile stat={s} key={id} addTile={addTile} />
  //   })
  
  //   p.setTiles(() => tiles)
  // }

  return (
    <div style={{padding: '5px', border: 'dotted 1px green'}}>
      <header style={{display: 'flex', flexDirection: 'row',  padding: '2px', border: 'dotted 1px teal'}}>
        <div style={{alignItems: 'center', justifyContent: 'center', border: 'dotted 1px'}}>
          {p.title} zoom={p.z} counter={p.c}
        </div>
        <div style={{marginLeft: 'auto', border: 'dotted 1px'}}
             onClick={p.zoomIn}>
          Zoom In
        </div>
        <div style={{marginLeft: 'auto', border: 'dotted 1px'}}
             onClick={p.zoomOut}>
          Zoom Out
        </div>
      </header>
      <article style={{display: 'flex', flexFlow: 'row wrap', height: '91%', justifyContent: 'space-around', alignItems: 'center', border: 'dotted 1px darkorchid'}}    onClick={p.addTile}>
        {p.tiles}
      </article>
    </div>
  )
}

// export default compose(connect(state => {return {tile: state.tile}}), withZoom, withCounter, withOnClick)(TileGroup)
export default compose(withTiles, withZoom, withCounter, withOnClick)(TileGroup)
// export default compose(withZoom, withCounter, withOnClick)(TileGroup)
