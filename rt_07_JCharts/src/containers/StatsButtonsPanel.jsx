import React from 'react'
import uuidv1 from 'uuid'
import { connect } from "react-redux";
import { ReactSlider } from "react-slider";

import { reload, modify, normalize, add, remove } from "../actions/index";

import '../index.css'

const mapStateToProps = (state, ownProps) => {
  return {
    charts: state.dataset.charts,
  }
}

const mapDispatchToProps = {
  reload,
  normalize,
  add,
  remove,
  modify,
}

function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
  return `${v} %`;
}

class StatsButtonsPanel extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 50,
  //   };
  // }
  // onSliderChange = (value) => {
  //   log(value);
  //   this.setState({
  //     value,
  //   });
  // }
  // onAfterChange = (value) => {
  //   console.log(value); //eslint-disable-line
  // }

  render() {
    //const sliders = <div className='panel-row'><Slider value={this.state.value} /></div>
    const sliders =  <div className='panel-row'><ReactSlider defaultValue={50} /></div>
    const buttons = this.props.charts.map((chart) => (
      <button className='chart-button' key={uuidv1()}
        onClick={() => this.props.normalize(chart.sstruct.id)}>{'Normalize ' + chart.sstruct.title + '-' + chart.sstruct.attr}</button>
    ))

    const reloadButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.reload()}>{'Load Internal Example'}</button></div>

    const modifyButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.modify()}>{'Modify'}</button></div>

    const addButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.add()}>{'Add'}</button></div>

    const remButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.remove()}>{'Remove'}</button></div>

    return <div className='panel-row'>{sliders}{buttons}{reloadButton}{modifyButton}{addButton}{remButton}</div>
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StatsButtonsPanel)
