import React from "react"
import ReactDOM from 'react-dom'

import './index.css'

const { Component } = React;

// Attempt to set the name of the overriding component (shown in inspector as 'unknown')
// Not working, hence commented out, for further study
// const setName = name => bc => { bc['displayName'] = name; return bc }

const overrideProps = overrideProps => BaseComponent => props => <BaseComponent {...props} {...overrideProps} />

//  const alwaysBob = setName('overridden') (overrideProps({ name: 'Bob' }))

const alwaysBob = overrideProps({ name: 'Bob' })

const neverRender = BaseComponent =>
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  };

const User = ({name}) => <div className="User">{name}</div>;

const User2 = alwaysBob(User);
const User3 = neverRender(User);

const App = () =>
  <div>
    <User name="Tim" />
    <User2 name="Joe" />
    <User3 name="Steve" />
  </div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
)