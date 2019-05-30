
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { getDataP1 } from '../actions'

const wordCounts = ({title=''}) => {
  console.info('Running wordCounts title=', title)

  return title !== '' ? title.split(' ').length : 0
}

const HookTester = ({getData, json, lastId}) => {

  const [id, setId] = useState(lastId)

  useEffect(() => {
    document.title = `id ${id} Ready`

    return () => document.title = `id ${lastId} Ready`
  }, [id])

  return (
    <div style={{margin: '25px'}}>
      <p>Ready to be retrieved with id={id}</p>
      <button onClick={useCallback(() => setId(id + 1), [id])}>
        Increase id
      </button>
      <p />
      <button onClick={useCallback(() => setId(id - 1), [id])}>
        Decrease id
      </button>
      <p />
      <button onClick={useCallback(() => getData(id), [id])}>
       Get data id {id}
      </button>
      <p>Last retrieved data: id={lastId} "{json.title}"</p>
      <p>Retrieved data with id={lastId} has {useMemo(() => wordCounts(json), [json])} words</p>
      <br />
    </div>
  )
}

const mapStateToProps = ({options, data}) => ({
  lastId: options.idP1,
  json: data.jsonP1
})

const mapDispatchToProps = {
  getData: getDataP1,
}

export default connect(mapStateToProps, mapDispatchToProps)(HookTester)
