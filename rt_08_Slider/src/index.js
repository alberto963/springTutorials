import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

// ========================================

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      m: 0,
      p: 0
    }
  }
  render() {
    return <div style={{ margin: 20, 
      width: 800, height: 500, display: 'flex', border: '1px solid grey'}}>

    <div style={{ width: 300, height: 500, display: 'flex', flexDirection: 'column', border: '1px solid grey'}}>
    
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <label style={{ margin: 20 }}>Square X</label>
        <Slider style={{ margin: 25 }} onChange={ x => this.setState({x}) }/>
      </div>
        
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <label style={{ margin: 20 }}>Square Y</label>
        <Slider style={{ margin: 25 }} onChange={ y => this.setState({y}) }/>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <label style={{ margin: 20}}>SVG Margin</label>
        <Slider style={{ margin: 25 }} onChange={ m => this.setState({m}) }/>
      </div>
        
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <label style={{ margin: 20 }}>SVG Padding</label>
        <Slider style={{ margin: 25 }} onChange={ p => this.setState({p}) }/>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <label style={{ margin: 20 }} >Range</label>
        <Range style={{ margin: 25 }} />
      </div>
    
    </div>
  
    <div style={{ width: 500, height: 500, border: '1px solid grey' }}>
      <svg width='100' height='100' style={{margin: this.state.m, padding: this.state.p, border: '1px solid grey'}} >
        <rect x={this.state.x} y={this.state.y} width='10' height='10' style={{fill: 'red'}} />
        <circle cx={this.state.x + 5} cy={this.state.y + 5} r='2.5' style={{fill: 'blue'}} />
      </svg> 
    </div>
  
    </div>
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
