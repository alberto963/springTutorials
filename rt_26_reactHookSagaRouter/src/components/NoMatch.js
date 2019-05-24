import React from 'react'

import { connect } from 'react-redux'

const NoMatch = () => <div>NoMatch</div>

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NoMatch)
