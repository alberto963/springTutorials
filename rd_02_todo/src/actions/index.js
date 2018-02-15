let nextTodoId = 1
/**
 * action addTodo
 * @param {any} text
 */
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

/**
 * action setVisibilityFilter
 * @param {any} filter
 */
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

/**
 * action toggleTodo
 * @param {any} id
 */
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
