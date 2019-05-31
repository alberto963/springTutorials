import React, { useState, useContext, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const init = 'btn btn-dark'
const BtnColorContext = React.createContext(init)

const App = () => {
  const [c, setC] = useState(init)

  const toggleC = (c === init ? 'btn btn-success' : init)

  return (
    <div>
      <button className={'btn btn-lg'} onClick={useCallback(() => setC(toggleC), [c])}>>
        Change context
      </button>
      <div>
        <Button />
        <BtnColorContext.Provider value='btn btn-info'>
          <Button />
        </BtnColorContext.Provider>
        <BtnColorContext.Provider value='btn btn-warning'>
          <Button />
        </BtnColorContext.Provider>

        <BtnColorContext.Provider value={c}>
          <Button />
        </BtnColorContext.Provider>

        <BtnColorContext.Provider value={c}>
          <BtnColorContext.Consumer>
            {value => console.info(value)}
          </BtnColorContext.Consumer>
        </BtnColorContext.Provider>

        <BtnColorContext.Provider value={c}>
          <ConsumerButton />
        </BtnColorContext.Provider>
      </div>
    </div>
  )
}

const Button = props => // Note: props are not used
  <div className='container'>
    <ThemedButton />    
  </div>

const ThemedButton = props => // Note: props are not used
  <button style={{margin: '10px'}} className={useContext(BtnColorContext)}>
    hello
  </button>

const ConsumerButton = props =>
  <div className='container'>
    <BtnColorContext.Consumer>
      {(value) => <button style={{margin: '10px'}} className={value} onClick={() => {}}>Consumer</button>}
    </BtnColorContext.Consumer>
  </div>
  
export default App