
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'

const wordCounts = ({title=''}) => {
  console.info('Running wordCounts title=', title)

  return title !== '' ? title.split(' ').length : 0
}

const InnerTodo = ({getData, json, lid}) => {

  const [id, setId] = useState(1)

  useEffect(() => {
    document.title = `id ${id} Ready`
  }, [id])

  return (
    <div>
      <p>Current id is {id}</p>
      <button onClick={useCallback(() => setId(id + 1), [id])}>
        Increase id
      </button>
      <p />
      <button onClick={useCallback(() => setId(id - 1), [id])}>
        Decrease id
      </button>
      <p />
      <button onClick={useCallback(() => getData(id), [id])}>
        Get data
      </button>
      <p>Retrieved data id={lid} "{json.title}"</p>
      <p>Retrieved data with id={lid} has {useMemo(() => wordCounts(json), [json])} words</p>
      <br />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lid: state.options.id,
    json: state.data.json
  }
}

const mapDispatchToProps = {
  getData,
}

export default connect(mapStateToProps, mapDispatchToProps)(InnerTodo)
