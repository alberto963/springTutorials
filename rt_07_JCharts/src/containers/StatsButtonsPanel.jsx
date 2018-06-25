import React from 'react'
import uuidv1 from 'uuid'
import { connect } from "react-redux";
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

class StatsButtonsPanel extends React.Component {

  render() {
    const buttons = this.props.charts.map((chart) => (
      <button className='chart-button' key={uuidv1()}
        onClick={() => this.props.normalize(chart.sstruct.id)}>{'Normalize ' + chart.sstruct.title + '-' + chart.sstruct.attr}</button>
    ))

    const reloadButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.reload()}>{'Reload'}</button></div>

    const modifyButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.modify()}>{'Modify'}</button></div>

    const addButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.add()}>{'Add'}</button></div>

    const remButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.remove()}>{'Remove'}</button></div>

    return <div className='panel-row'>{buttons}{reloadButton}{modifyButton}{addButton}{remButton}</div>
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StatsButtonsPanel)
