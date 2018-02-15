const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
        
       /* Not using spread operator:
        * 
          return Object.assign({}, state, {
            todos: state.todos.map((todo, index) => {
            
              if (index === action.index) {
                return Object.assign({}, todo, {
                  completed: !todo.completed
                })
              }
              
              return todo
            })
          })
         * 
         */       
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
      
    default:
      return state
  }
}

const todos = (state = [{
    id: 0,
    text: "to do initial",
    completed: false
  }], action) => {
      
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
  
}

export default todos
