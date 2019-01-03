import * as React from 'react'
import { withState } from 'recompose'
import Tile from './Tile'

const withZoom = withState('z' , 'setZ', 0)
const withCounter = withState('c' , 'setC', p => p.stat.length)

const TileGroup = p => {

  const tiles = p.stat.map((s, id) => {
    return <Tile stat={s} key={id} />
  })

  return (
    <div style={{padding: '5px', border: 'dotted 1px green'}}>
      <header style={{display: 'flex', flexDirection: 'row',  padding: '2px', border: 'dotted 1px teal'}}>
        <div style={{alignItems: 'center', justifyContent: 'center', border: 'dotted 1px'}}>
          {p.title} zoom={p.z} counter={p.c}
        </div>
        <div style={{marginLeft: 'auto', border: 'dotted 1px'}}
             onClick={() => p.setZ(z => z + 1)}>
          Zoom
        </div>
      </header>
      <article style={{display: 'flex', flexFlow: 'row wrap', height: '91%', justifyContent: 'space-around', alignItems: 'center', border: 'dotted 1px darkorchid'}} onClick={() => p.setC(c => c + 1)}>
        {tiles}
      </article>
    </div>
  )
}

export default withCounter(withZoom(TileGroup))
