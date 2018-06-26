import React from 'react'
import uuidv1 from 'uuid'
import { connect } from "react-redux";

import '../index.css'

const mapStateToProps = (state, ownProps) => {
  return {
    charts: state.dataset.charts,
  }
}

const mapDispatchToProps = {
}

class StatsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='panel'>
        {this.props.children}
      </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer)
