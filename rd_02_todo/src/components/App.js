import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo myProp="background-color:red"/>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
