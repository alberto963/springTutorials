import React from 'react'
import ReactDOM from 'react-dom'
import * as V from 'victory';

import './index.css'

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

const pieData1 = [
  { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
];

const pieStyle = { labels: { fontSize: 20, fill: 'white'}}
class Pie1 extends React.Component {
  render() {
    return (
     <svg values='' width={400} height={400}>
        <V.VictoryPie standalone={false} width={400} height={400} data={pieData1} innerRadius={68} labelRadius={100} style={pieStyle} />
        <V.VictoryLabel textAnchor='middle' style={{ fontSize: 20 }} x={200} y={200} text='Pie!' />
    </svg>
  )
}
}

class Tutorial1 extends React.Component {
  render() {
    return (
        <svg values='' width={1000} height={1000}>
          <h1>Victory Tutorial 1</h1>
          <V.VictoryBar standalone={false} width={400} height={400} data={data} x="quarter" y="earnings"/>
        </svg>
    )
  }
}

class Tutorial2 extends React.Component {
  render() {
    return (

<div className='panel-row' >

    <div className='panel-elem' >
    <h1>Victory Tutorial 1</h1>
        <V.VictoryBar standalone={false} width={100} height={100} data={data} x="quarter" y="earnings"/>
    </div>

    <div className='panel-elem' >
    <h1>Victory Tutorial 2</h1>
        <V.VictoryChart>
          <V.VictoryBar standalone={false} width={100} height={100} data={data} x="quarter" y="earnings"/>
        </V.VictoryChart>
    </div>

    <div className='panel-elem' >
    <h1>Victory Tutorial 3</h1>
        <V.VictoryChart domainPadding={10} >
          <V.VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]} />
          <V.VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
          <V.VictoryBar width={100} height={100} standalone={false} data={data} x={"quarter"} y={"earnings"} />
        </V.VictoryChart>
    </div>

    <div className='panel-elem' >
    <h1>Victory Tutorial 4</h1>
    <V.VictoryChart domainPadding={10} theme={V.VictoryTheme.material}>
      <V.VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]} />
      <V.VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
      <V.VictoryBar width={100} height={100} standalone={false} data={data} x={"quarter"} y={"earnings"} />
    </V.VictoryChart>
      </div>

    <div className='panel-elem' >
    <h1>Victory Tutorial 5</h1>
    <V.VictoryChart domainPadding={10} theme={V.VictoryTheme.material}>
      <V.VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]} />
      <V.VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
          <V.VictoryStack width={100} height={100} standalone={false}>
            <V.VictoryBar data={data2012} x={"quarter"} y={"earnings"} />
            <V.VictoryBar data={data2013} x={"quarter"} y={"earnings"} />
            <V.VictoryBar data={data2014} x={"quarter"} y={"earnings"} />
            <V.VictoryBar data={data2015} x={"quarter"} y={"earnings"} />
          </V.VictoryStack>
        </V.VictoryChart>
    </div>

</div>
    )
  }
}
// ========================================

// ReactDOM.render(
//     <div>
//       <Pie1 />
//     </div>,
//     document.getElementById('root')
//   )

// ReactDOM.render(
//   <div>
//     <Tutorial1 />
//   </div>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <div className='panel'>
    <Tutorial2 />
  </div>,
  document.getElementById('root')
)
