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
  { title: 'pie1', type: 'pie', category: ['f1', 'f3', 'f2'] }, 
  { title: 'bar1', type: 'bar', category: ['f1', 'f3'] },

  { title: 'pie2', type: 'pie', category: ['f2', 'f3'] }, 
  { title: 'bar2', type: 'bar', category: ['f2', 'f3'] },
]

/*
 * Write an algorithm that builds the following array object on user request
 */
const pieData_F1 = [
  {f1: 1, y: 3, label: 'F1-1'},
  {f1: 2, y: 3, label: 'F1-2'},
  {f1: 3, y: 3, label: 'F1-3'},
]

const pieData_F3 = [
  {f3: true, y: 4, label: 'F3-T'},
  {f3: false, y: 5, label: 'F3-F'},
]

const barData_1 = [
  {x: 1, y: 3, label: 'F1-1', other: 'O'},
  {x: 2, y: 4, label: 'F3-T', other: 'O'},
]

const barData_2 = [
  {x: 1, y: 3, label: 'F1-2', other: 'O'},
  {x: 2, y: 5, label: 'F3-F', other: 'O'},
]

const barData_3 = [
  {x: 1, y: 3, label: 'F1-3', other: 'O'},
]

const pieStyle = { labels: { fontSize: 10, fill: 'black'}}
class JPie extends React.Component {
  
  render() {
    return (
        <div className='panel-elem'>
          <svg values='' width={200} height={200}>
            <V.VictoryPie standalone={false} width={200} height={200} data={this.props.data} innerRadius={25} labelRadius={50}
                          style={pieStyle} colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                          animate={{duration: 2000, onLoad: { duration: 1000 }}} />

            <V.VictoryLabel textAnchor='middle' style={{ fontSize: 10 }} x={100} y={100} text={this.props.title} />
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

          <V.VictoryAxis tickValues={["F1", "F3",]}/>
          <V.VictoryAxis dependentAxis tickFormat={(x) => (`${x}`)}/>

          <V.VictoryStack width={100} height={100} standalone={false} style={barStyle}>
            <V.VictoryBar data={this.props.data[0]} labelComponent={<V.VictoryLabel dx={40} dy={30}/>} animate={{duration: 2000, onLoad: { duration: 1000 }}}
                          dataComponent={ <V.Bar events={{ onClick: (evt) => alert(`(${evt.clientX}, ${evt.clientY})`) }} /> } />
            <V.VictoryBar data={this.props.data[1]} labelComponent={<V.VictoryLabel dx={40} dy={30}/>} animate={{duration: 2000, onLoad: { duration: 1000 }}}
                                                    />
            <V.VictoryBar data={this.props.data[2]} labelComponent={<V.VictoryLabel dx={40} dy={30}/>} animate={{duration: 2000, onLoad: { duration: 1000 }}}
                                                   />
          </V.VictoryStack>

          <V.VictoryLabel textAnchor='start' style={{ fontSize: 20 }} x={150} y={10} labelPlacement='parallel' text={this.props.title} />

        </V.VictoryChart>
      </div>
    )
  }
}

class JBar2 extends React.Component {
  render() {

    const bars = this.props.data.map((data, i) => {
      return <V.VictoryBar data={data} labelComponent={<V.VictoryLabel dx={40} dy={30}/>} animate={{duration: 2000, onLoad: { duration: 1000 }}}
      dataComponent={ <V.Bar events={{ onClick: (evt) => alert(`(${evt.clientX}, ${evt.clientY})`) }} /> } />;
    });

    return (
      <div className='panel-elem' >
        <V.VictoryChart domainPadding={10} theme={V.VictoryTheme.material}>

          <V.VictoryAxis tickValues={this.props.struct.category}/>
          <V.VictoryAxis dependentAxis tickFormat={(x) => (`${x}`)}/>

          <V.VictoryStack width={100} height={100} standalone={false} style={barStyle}>
            {bars}
          </V.VictoryStack>

          <V.VictoryLabel textAnchor='start' style={{ fontSize: 20 }} x={150} y={10} labelPlacement='parallel' text={this.props.struct.title} />

        </V.VictoryChart>
      </div>
    )
  }
}
class StatsPanel extends React.Component {

  distribute(data, category) {
    var g=0;
    return data.reduce((distributor, currentData) => {

      if (!currentData.hasOwnProperty(category)) { 
        return distributor;
      }

      var value = currentData[category]
      if (distributor.values.has(value)) {
        var current = distributor.values.get(value)
        current.occurrencies +=1
        distributor.values.set(value, current);
        distributor.distribution[current.index] = {x: value, y: current.occurrencies }
      } else {
        var newV={index: g++, occurrencies:1}
        distributor.values.set(value, newV);
        distributor.distribution = distributor.distribution.concat( [{x: value, y: newV.value}])
      }
    
      return distributor;
      }, {values : new Map(), distribution: [] });
  }
  render() {
    let statData1 = this.distribute(this.props.data, this.props.struct[0].category[0])
    console.info(statData1)
    let statData2 = this.distribute(this.props.data, this.props.struct[0].category[1])
    console.info(statData2)
    let statData3 = this.distribute(this.props.data, this.props.struct[0].category[2])
    console.info(statData3)

    return (
      <div className='panel'>
        <div className='panel-row' >
        <JPie data={statData1.distribution} title={this.props.struct[0].category[0]} />
        <JPie data={statData2.distribution} title={this.props.struct[0].category[1]} />
        <JPie data={statData3.distribution} title={this.props.struct[0].category[2]} />
        <JPie data={pieData_F1} title={this.props.struct[0].title + '-1'} />
        <JPie data={pieData_F3} title={this.props.struct[0].title + '-2'} />

        <JBar data={[barData_1, barData_2, barData_3]} title={this.props.struct[1].title} />
        <JBar2 data={[barData_1, barData_2, barData_3]} struct={this.props.struct[1]} />
        </div>
    </div>
    )
  }
}
// ========================================

ReactDOM.render(
  <div className='panel'>
    <StatsPanel data={data} struct={struct} />
  </div>,
  document.getElementById('root')
)
