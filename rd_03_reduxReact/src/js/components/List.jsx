// src/js/components/List.js
import React from "react"
import { connect } from "react-redux"

import { setNum } from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return { 
    list: state.elems.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNum: c => dispatch(setNum(c))
  }
}

const UList = (props) => {
  console.info('UList props=', props)

  return (

  <ol className="list-group list-group-flush">
    {props.list.map(elem => (
      <li className="list-group-item" key={elem.id}>
        {elem.title}
        <button className="del-button" title="inc" onClick={() => {
           console.info('props=', props)
           props.setNum(1)
          }
        } />
      </li>
    ))}
  </ol>
)
}

// const UList = ({ list }) => (
//     <ol className="list-group list-group-flush">
//       {list.map(elem => (
//       <li className="list-group-item" key={elem.id}>
//         {elem.title}
//         <button className="del-button" title="del" onClick={() => {
//           console.info('list=', list)
//           }
//         } />
//       </li>
//     ))}
//   </ol>
// )

const List = connect(mapStateToProps, mapDispatchToProps)(UList)

export default List;