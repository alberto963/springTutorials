import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
//import Simple from './components/Simple'
import counter from './reducers'


const store = createStore(counter)
//const store2 = createStore(counter)
const rootEl = document.getElementById('root')
//const myrootEl = document.getElementById('myroot')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)


// const render2 = () => ReactDOM.render(
//   <Simple
//     value={store2.getState()}
//     f1={() => { console.log('f1') } }
//     f2={() => { console.log('f2 --- ') } }
//   />,
//   myrootEl
// )


render()
//render2()
store.subscribe(render)
//store2.subscribe(render2)
