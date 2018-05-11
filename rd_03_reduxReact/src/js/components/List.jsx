// src/js/components/List.js
import React from "react"
import { connect } from "react-redux"

import { incNum, setNum,  } from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return { 
    propsList: state.elems.list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    propsIncNum: num => dispatch(incNum(num)),
    propsSetNum: num => dispatch(setNum(num)),
  }
}

const UList = (props) => {
  // console.info('UList props=', props)
  return (
    <ol className="list-group list-group-flush">
      {props.propsList.map(elem => (
        <li className="list-group-item" key={elem.id}>
          {elem.title}
          <button className="set-button" title="inc" onClick={() => {
            // console.info('props=', props)
            props.propsSetNum(1)
            }
          } />
          <button className="set-button" title="set" onClick={() => {
            // console.info('props=', props)
            props.propsSetNum(2)
            }
          } />
        </li>
      ))}
    </ol>
  )
}

// const UList = ({ propsList }) => (
//     <ol className="list-group list-group-flush">
//       {propsList.map(elem => (
//       <li className="list-group-item" key={elem.id}>
//         {elem.title}
//         <button className="del-button" title="del" onClick={() => {
//           // console.info('propsList=', propsList)
//           }
//         } />
//       </li>
//     ))}
//   </ol>
// )

const List = connect(mapStateToProps, mapDispatchToProps)(UList)

export default List;