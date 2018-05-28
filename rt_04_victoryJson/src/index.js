import React from 'react'
import ReactDOM from 'react-dom'
import * as V from 'victory'

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
]

const struct = [
  { title: 'pie1', type: 'pie', fields: ['f1', 'f3'] }, 
  { title: 'bar1', type: 'bar', fields: ['f1', 'f3'] },

  { title: 'pie2', type: 'pie', fields: ['f2', 'f3'] }, 
  { title: 'bar2', type: 'bar', fields: ['f2', 'f3'] },
]

/*
 * Build an algorithm that builds the following array object on user request
 */
const pieData_F1 = [
  {x: 1, y: 3, label: 'F1-1'},
  {x: 2, y: 3, label: 'F1-2'},
  {x: 3, y: 3, label: 'F1-3'},
]

const pieData_F2 = [
  {x: 4, y: 4, label: 'F2-T'},
  {x: 5, y: 5, label: 'F2-F'},
]

const barData_1 = [
  {x: 1, y: 3, label: 'F1-1'},
  {x: 2, y: 4, label: 'F2-T'},
]

const barData_2 = [
  {x: 1, y: 3, label: 'F1-2'},
  {x: 2, y: 5, label: 'F2-F'},
]

const barData_3 = [
  {x: 1, y: 3, label: 'F1-3'},
]

const pieStyle = { labels: { fontSize: 10, fill: 'black'}}
class JPie extends React.Component {
  
  render() {
    return (
        <div className='panel-elem'>
          <svg values='' width={200} height={200}>
            <V.VictoryPie standalone={false} width={200} height={200} data={this.props.data} innerRadius={25} labelRadius={50}
                          style={pieStyle} colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                          animate={{duration: 2000}} />

            <V.VictoryLabel textAnchor='middle' style={{ fontSize: 10 }} x={100} y={100} text={this.props.text} />
          </svg>
        </div>
    )
  }
}

const barStyle = { labels: { fontSize: 20, fill: 'black'}}
class JBar extends React.Component {
  render() {
    return (
      <div className='panel-elem' >
        <V.VictoryChart domainPadding={10} theme={V.VictoryTheme.material}>

          <V.VictoryAxis tickValues={["F1", "F2",]}/>
          <V.VictoryAxis dependentAxis tickFormat={(x) => (`${x}`)}/>

          <V.VictoryStack width={100} height={100} standalone={false} style={barStyle}>
            <V.VictoryBar data={this.props.data[0]} labelComponent={<V.VictoryLabel dx={40} dy={30}/>} animate={{duration: 2000, onLoad: { duration: 1000 }}} />
            <V.VictoryBar data={this.props.data[1]} labelComponent={<V.VictoryLabel dx={40} dy={30}/>} animate={{duration: 2000, onLoad: { duration: 1000 }}} />
            <V.VictoryBar data={this.props.data[2]} labelComponent={<V.VictoryLabel dx={40} dy={30}/>} animate={{duration: 2000, onLoad: { duration: 1000 }}} />
          </V.VictoryStack>

          <V.VictoryLabel textAnchor='start' style={{ fontSize: 20 }} x={150} y={10} labelPlacement='parallel' text={this.props.text} />

        </V.VictoryChart>
      </div>
    )
  }
}

class StatsPanel extends React.Component {
  render() {
    return (
      <div className='panel'>
        <div className='panel-row' >
          <JPie data={pieData_F1} text='pie1-1' />
          <JPie data={pieData_F2} text='pie1-2'/>
          <JBar data={[barData_1, barData_2, barData_3]} text='bar1' />
        </div>
    </div>
    )
  }
}
// ========================================

ReactDOM.render(
  <div className='panel'>
    <StatsPanel data={data} struct={struct}/>
  </div>,
  document.getElementById('root')
)
