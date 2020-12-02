export const panels = ['users', 'posts', 'comments', 'todos']
export const decode = (json, panel) => {
  switch(panel) {
   case 'users':
    return json.name
    case 'posts':
    return json.body
    case 'comments':
    return json.email
    case 'todos':
    return json.title
   default:
     return ''
  }
}