import React, { Component, PropTypes } from 'react'
//import { MenuContext } from 'react-native-popup-menu';

class Simple extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    f1: PropTypes.func.isRequired,
    f2: PropTypes.func.isRequired
  }

 constructor( props, context ) {
      super( props, context );
      console.log("Constructor Simple");
  }

  f1 = () => {
    if (this.props.value % 2 !== 0) {
      this.props.f1()
    }
  }

  f2 = () => {
    if (this.props.value % 2 === 0) {
      this.props.f2()
    }
  }

  // f3 = () => {
  //   setTimeout(this.props.f1, 1000)
  // }

  render() {

    const { value, f1, f2 } = this.props

//f1();

//f2();

    return (
      <p>
       Hi
      </p>
    )
  }
}

export default Simple
