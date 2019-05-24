
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { getData } from './actions'

// Keeps track of all created functions during the app's life 
const callbackFunctions = new Set()
const memoFunctions = new Set()
const functions = new Set()
const callbackMemoFunctions = new Set()

const Example = props => {

  const computeHalf = id => {
    console.info('Running computeHalf id=', id)

    return id/2
  }

  const wordCounts = w => {
    console.info('Running wordCounts w=', w)

    return w.split(' ').length
  }

  const treeScan = a => {
    let r = 0

    const st = a => a.forEach(e => {
      if (e.child !== []) {
        st(e.child)
        r=r+1
      }
    })

    console.info('Running treeScan a=', a)
    st(a)

    return r
  }

  // Declare a new state variable, which we'll call "id"
  const [id, setId] = useState(1)
  const [cid, setCid] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.info('useEffect called id', id)

    // Update the document title using the browser API
    document.title = `id ${id} Ready`

    return () => console.info('useEffect returned func called id', id)
  }, [id])

  const inc = () => setId(id + 1)
  const dec = () => setId(id - 1)
  const get = () => props.getData(id)
  // const callback = () => setCid(id/2)
  const callback = useCallback(() => setCid(id/2), [id])
  const cidMemo = useMemo(() => computeHalf(id), [id])
  const wcMemo = useMemo(() => props.json ? wordCounts(props.json.title) : 0, [props.json ? props.json.title : props.json])
  const tdMemo = useMemo(() => props.tree ? treeScan(props.tree) : 0, [props.tree])
  const comp = () => setCid(cidMemo)
  const callbackMemo = useCallback(() => setCid(cidMemo), [cidMemo])

  // Register the functions so we can count them
  functions.add(inc)
  functions.add(dec)
  functions.add(get)
  functions.add(comp)
  callbackFunctions.add(callback)
  memoFunctions.add(cidMemo)
  memoFunctions.add(wcMemo)
  memoFunctions.add(tdMemo)
  callbackMemoFunctions.add(callbackMemo)

  return (
    <div>
      <p>Current id is {id}</p>
      <button onClick={inc}>
        Increase id
      </button>
      <p />
      <button onClick={dec}>
        Decrease id
      </button>
      <p />
      <button onClick={get}>
        Get data
      </button>
      <p>Compute half id={id} half: {cidMemo}</p>
      <p>Retrieved data id={props.id} {props.json ? props.json.title: ''}</p>
      <p>Retrieved data id={props.id} words count: {wcMemo}</p>
      <p>Retrieved data id={props.id} td count: {tdMemo}</p>
      <p />
      <p>Current cid (computed id with Test hook callback) is {cid}</p>
      <br />
      <button onClick={callback}>
        Test hook callback
      </button>
      <br />
      <p />
      <button onClick={comp}>
        Test hook memo
      </button>
      <br />
      <p />
      <button onClick={callbackMemo}>
        Test hook callback and memo
      </button>
      <p />
      <div> Newly Created Functions: {functions.size} </div>
      <div> Newly Created callback Functions: {callbackFunctions.size} </div>
      <div> Newly Created memo Functions: {memoFunctions.size} </div>
      <div> Newly Created callback and memo Functions: {callbackMemoFunctions.size} </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.options.id,
    json: state.data.json,
    tree: state.data.tree
  }
}

const mapDispatchToProps = {
  getData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)
