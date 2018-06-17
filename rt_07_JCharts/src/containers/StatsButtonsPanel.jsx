import React from 'react'
import uuidv1 from 'uuid'
import { connect } from "react-redux";
import { modify, reload, add, remove } from "../actions/index";

import '../index.css'

const mapStateToProps = (state, ownProps) => {
  return {
    datas: state.dataset.charts,
  }
}

const mapDispatchToProps = {
  reload,
  add,
  remove,
  modify,
}

class StatsButtonsPanel extends React.Component {

  render() {
    const buttons = this.props.datas.map((d) => (
      <button className='chart-button' key={uuidv1()}
        onClick={() => this.props.reload(d.sstruct.id)}>{'Reload ' + d.sstruct.title + '-' + d.sstruct.attr}</button>
    ))

    const modifyButton = <div className='panel-row'><br /><button className='chart-button' key={uuidv1()}
      onClick={() => this.props.modify()}>{'Modify'}</button></div>

    return <div className='panel-row'>{buttons}{modifyButton}</div>
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StatsButtonsPanel)
