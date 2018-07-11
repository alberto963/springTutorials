import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import { connect } from "react-redux";
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';

// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import { reload, modify, normalize, add, remove, x, y, w, h, xl, yl } from "../actions";

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
  w,
  h,
  xl,
  yl,
}
const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
  return `${v} %`;
}

const Handle = Slider.Handle;
const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class StatsButtonsPanel extends React.Component {

  constructor(props) {
    super(props)

    this.props.x(0)
    this.props.y(30)
    this.props.w(-1)
    this.props.h(4)
    this.props.xl(100)
    this.props.yl(10)
  }
  handleChange = (value) => {
    console.log(value);
  }
  render() {

    const sliders = <div className='panel-row' style={style}>

      <div className='panel-row'><label><strong>Chart domainPadding X</strong></label>
      <Slider min={-300} max={300} defaultValue={0} onChange={this.props.x} handle={handle} /></div><br /><br />
      <div className='panel-row'><label><strong>Chart domainPadding Y</strong></label>
      <Slider min={-300} max={300} defaultValue={30} onChange={this.props.y} handle={handle} /></div><br /><br />

      <div className='panel-row'><label><strong>Chart domain X min</strong></label>
      <Slider min={-20} max={20} disabled={false} defaultValue={-1} onChange={this.props.w} handle={handle} marks={{}} /></div><br /><br />
      <div className='panel-row'><label><strong>Chart domain X MAX</strong></label>
      <Slider min={-10} max={10} disabled={false} defaultValue={4} onChange={this.props.h} handle={handle} /></div><br /><br />

      <label><strong>DependentAxis offsetX and Label X</strong></label>
      <div className='panel-row'><Slider max={300} defaultValue={100} onChange={this.props.xl} handle={handle} /></div><br /><br />
      <label><strong>Label Y</strong></label>
      <div className='panel-row'><Slider max={300} defaultValue={10} onChange={this.props.yl} handle={handle} /></div><br /><br />

      <div className='panel-row'><Range onChange={this.handleChange} /></div><br />
    </div>

    const buttons = this.props.charts.map((chart) => (
      <div key={uuidv1()} className='panel-row'><br />
        <button className='chart-button' key={uuidv1()}
          onClick={() => this.props.normalize(chart.sstruct.id)}>{'Normalize ' + chart.sstruct.title + '-' + chart.sstruct.attr}
        </button>
      </div>
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
