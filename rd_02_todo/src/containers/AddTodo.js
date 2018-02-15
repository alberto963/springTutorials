import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({dispatch, myProp}) => {
  let input
  
  console.log(myProp)

  return (
    <div>
    
      <span style={{myProp}}>Things to do... It should be in red background and it isn't!!!!</span>
    
      <form onSubmit={e => {
        e.preventDefault()
        
        const v = input.value
         
        if (!v.trim()) {
          return
        }
        
        const action = addTodo(v)
        
        dispatch(action)
        
        input.value = ''
      }}>
      
        <input ref={node => {
          input = node
        }} />
        		
        <button type="submit">
          Add Todo
        </button>
          
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo

/*****
let AddTodo = ({ addTodo }) => {
 let input

return (
  <div>
  
    <form onSubmit={e => {
    
      e.preventDefault()
      
      if (!input.value.trim()) {
        return
      }
      
      addTodo(input.value)
      
      input.value = ''
    }}>
    
      <input ref={node => {
        input = node
      }} />
      
      <button type="submit">
        Add Todo
      </button>
      
    </form>
    
  </div>
)

AddTodo = connect(null, {addTodo})(AddTodo)
        
export default AddTodo

*****/