import React from 'react'
import ReactDOM from 'react-dom'
import * as V from 'victory';

import './index.css'

const data = [
  {id: 1, f1: 1, f2: 'A', f3: true},
  {id: 2, f1: 2, f2: 'A', f3: true},
  {id: 3, f1: 3, f2: 'A', f3: true},
  {id: 4, f1: 1, f2: 'B', f3: true},
  {id: 5, f1: 2, f2: 'B', f3: false},
  {id: 6, f1: 3, f2: 'B', f3: false},
  {id: 7, f1: 1, f2: 'C', f3: false},
  {id: 8, f1: 2, f2: 'C', f3: false},
  {id: 9, f1: 3, f2: 'C', f3: false},
];

const jconfData = [
  { title: 'pie1', type: 'pie', fields: ['f1', 'f3'] }, 
  { title: 'bar1', type: 'bar', fields: ['f1', 'f3'] },
  { title: 'pie2', type: 'pie', fields: ['f2', 'f3'] }, 
  { title: 'bar2', type: 'bar', fields: ['f2', 'f3'] },
];

const jresData1 = [
  {x: 1, y: 3, label: 'f1'},
  {x: 2, y: 3, label: 'f1'},
  {x: 3, y: 3, label: 'f1'},
  {x: true, y: 4, label: 'f2'},
  {x: false, y: 5, label: 'f2'},
]

const pieStyle = { labels: { fontSize: 20, fill: 'white'}}
class JPie extends React.Component {
  render() {
    return (
      <div className='panel-row' >
        <div className='panel-elem' >
        <svg values='' width={400} height={400}>
          <V.VictoryPie standalone={false} width={400} height={400} data={jresData1} innerRadius={68} labelRadius={100} style={pieStyle} />
          <V.VictoryLabel textAnchor='middle' style={{ fontSize: 20 }} x={200} y={200} text='pie1' />
       </svg>
        </div>
    </div>
    )
  }
}

class JBar extends React.Component {
  render() {
    return (
        <div className='panel-row' >
            <div className='panel-elem' >
                <V.VictoryChart>
                  <V.VictoryBar standalone={false} width={100} height={100} data={data} x="quarter" y="earnings"/>
                </V.VictoryChart>
            </div>
        </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <div className='panel'>
    <JPie />
  </div>,
  document.getElementById('root')
)
