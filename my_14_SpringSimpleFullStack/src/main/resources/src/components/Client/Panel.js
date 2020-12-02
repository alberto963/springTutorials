import React, { useContext } from 'react'
import { Card } from './Card'
import { Controls } from './Controls'
import Context from './Context'

export const Panel = () => {

  const {classes} = useContext(Context)
  const {root} = classes

  return (
    <div className={root}>
      <Card />
      <Controls />
    </div>
  )
}
