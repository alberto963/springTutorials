import React, { Component, PropTypes } from 'react'

class Simple extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired
  }

 constructor( props, context ) {
      super( props, context );
      
      console.log("Constructor Simple");
  }

  render() {

    const { value } = this.props

    return (
      <p>
       Hi {value}
      </p>
    )
  }
}

export default Simple
