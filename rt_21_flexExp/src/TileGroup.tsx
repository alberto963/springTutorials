import * as React from 'react'
import { withState } from 'recompose'
import Tile from './Tile'

const withCounter = withState('c' , 'getC', 0)

const TileGroup = p => {

  const tiles = p.stat.map((s, id) => {
    return <Tile stat={s} key={id} />
  })

  return (
    <div style={{padding: '5px', border: 'dotted 1px green'}}>
      <header style={{display: 'flex', flexDirection: 'row',  padding: '2px', border: 'dotted 1px teal'}}>
        <div style={{alignItems: 'center', justifyContent: 'center', border: 'dotted 1px'}}>
          {p.title}
        </div>
        <div style={{marginLeft: 'auto', border: 'dotted 1px'}}>
          Zoom
        </div>
      </header>
      <article style={{display: 'flex', flexFlow: 'row wrap', height: '91%', justifyContent: 'space-around', alignItems: 'center', border: 'dotted 1px darkorchid'}}>
        {tiles}
      </article>
    </div>
  )
}

export default withCounter(TileGroup)
