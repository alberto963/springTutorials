import React from 'react'
import PropTypes from 'prop-types'

import { connect } from "react-redux";
import { load } from '../actions'

import '../index.css'

const mapStateToProps = (state, ownProps) => {
  return {
    charts: state.dataset.charts,
  }
}

const mapDispatchToProps = {
  load
}

class StatsContainer extends React.Component {
  constructor(props) {
    super(props)
    props.load(props.data, props.structs)
  }

  render() {
    return (
      <div className='panel'>
        {this.props.children}
      </div>)
  }
}

StatsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  structs: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer)
