
import React, { useState, useEffect  } from 'react'
import { connect } from 'react-redux'
import { getData } from './actions'

const Example = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [id, setId] = useState(1)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You can get id ${id}`
  })

  return (
    <div>
      <p>Current id is {id}</p>
      <button onClick={() => setId(id + 1)}>
        Increase id
      </button>
      <p />
      <button onClick={() => setId(id - 1)}>
        Decrease id
      </button>
      <p />
      <button onClick={() => props.getData(id)}>
        Get data
      </button>
      <p>Retrieved data id={props.id} {props.json ? props.json.title: ''}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.options.id,
    json: state.data.json
  }
}

const mapDispatchToProps = {
  getData,
}

export default connect(mapStateToProps, mapDispatchToProps) (Example)
