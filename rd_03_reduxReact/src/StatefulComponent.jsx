import React, { Component } from "react"

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
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }
  render() {
    const { list } = this.state
    return (
      <div>
        <button className="my-button" onClick={() => {
          console.log('my button clicked!!!')
          this.setState(() => {
              return { list: list.concat({title: 'new ' + (list.length + 1), id: list.length + 1})}
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