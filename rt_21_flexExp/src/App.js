import * as React from 'react'
import StatsPanel from './StatsPanel'

const App = () => 
  <div>
    <header>
      <center>Experimenting on <code>css flex</code> for panel development.</center>
    </header>
      <StatsPanel datasets={['d0', 'd1', 'd2', 'd3', 'd4']} />
  </div>

export default App
