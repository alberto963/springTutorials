import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import { connect } from "react-redux";
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import { reload, modify, normalize, add, remove, x, y, xl, yl } from "../actions";

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
  x,
  y,
  xl,
  yl,
}

function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
  return `${v} %`;
}

class StatsButtonsPanel extends React.Component {

  handleChange = (value) => {
    console.log(value);
  }
  render() {
    const sliders = <div className='panel-row'>
      <div className='panel-row'><Slider onChange={this.props.x} /></div>
      <div className='panel-row'><Slider onChange={this.props.y} /></div>
      <div className='panel-row'><Slider onChange={this.props.xl} /></div>
      <div className='panel-row'><Slider onChange={this.props.yl} /></div>
      <div className='panel-row'><Range onChange={this.handleChange} /></div>
    </div>

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
