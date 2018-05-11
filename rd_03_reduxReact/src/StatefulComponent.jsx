import React, { Component } from "react"
import uuidv1 from "uuid"

/**
 * Stateful React component example:
 * 
 * Every stateful React component carries its own state. In a React component the state holds up data.
 * The component might render such data to the user and there’s setState for updating the local state of a component.
 * Everybody learned React this way:
 *    render some data from the local state
 *    update the state with React setState
 */
export default class StatefulComponent extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { title: "React Redux Tutorial for Beginners", id: uuidv1() },
        { title: "How to use Redux with React", id: uuidv1() }
      ]
    };
  }
  render() {

    const { list } = this.state

    return (
      <div>
        <h2>Stateful React Component (no redux)</h2>
        <button className="new-button" title="new" onClick={() => {
         // console.log('new button clicked!!!')
          this.setState(() => {
              return { list: list.concat({title: 'new ' + (list.length + 1), id: uuidv1()})}
              }
            )
          }
        } />

        <ol>
          {list.map(elem => <li key={elem.id}>{elem.title}</li>)}
        </ol>
        
      </div>
      )
  }
}