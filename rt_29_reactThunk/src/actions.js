const actionCreator = (type, payload, meta) => ({ type, payload, meta })
export const GET_DATA = 'GET_DATA'
export const SET_DATA = 'SET_DATA'

export const getData = async (id, panel) => {
  const payload = {id, panel}
  const meta = {id}

  await new Promise(() => fetch('https://jsonplaceholder.typicode.com/todos/'+ id )).then(response => {
      const r = response.json()
      console.info(r)
      return r
    })

  return actionCreator(GET_DATA, payload, meta)
}

export const setData = (json, panel) => {
  const payload = {json, panel}

  return actionCreator(SET_DATA, payload, null)
}
