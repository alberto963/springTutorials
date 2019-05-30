import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const BtnColorContext = React.createContext('btn btn-dark')

const App = () =>
  <div>
    <Button />
    <BtnColorContext.Provider value="btn btn-info">
      <Button />
    </BtnColorContext.Provider>
    <BtnColorContext.Provider value="btn btn-warning">
      <Button />
    </BtnColorContext.Provider>
    <BtnColorContext.Consumer>
      {value => <Button className={value} />}
    </BtnColorContext.Consumer>
  </div>

const Button = props => // Note: props are not used
  <div className="container">
    <ThemedButton />    
  </div>

const ThemedButton = props => // Note: props are not used
  <button style={{margin: '10px'}} className={useContext(BtnColorContext)}>
    hello
  </button>

export default App