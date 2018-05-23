import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid"

import { jump } from "../actions/index";

import "./../index.css";

const mapStateToProps = (state, ownProps) => {
  return {
    history: state.click.history,
    step: state.jump.step,
  }
}

const mapDispatchToProps = {
  jump,
};

class GameMoves extends React.Component {
  render() {
    const history = this.props.history;
    const step = this.props.step;
    const ascending = true;

    const moves = history.map((hstep, move) => {
      // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
      const pos = ascending ? move : history.length - move - 1 
      const desc = pos ? 'Go to move #' + pos :'Go to game start'
      const location = pos ? 'Move Location col=' + (hstep.i % 3) + ', row=' + Math.floor(hstep.i/3) + ', player=' + hstep.squares[hstep.i] : ''
      const currentmove = step === move ? 'true' : 'false' // Added for improvement #2 (Bold the currently selected item in the move list.)

      return (
        <li key={uuidv1()}>
          <button className="game-button" onClick={() => this.jump(move)} currentmove={currentmove}>{desc}</button>
          <div>{location}</div>
        </li>
      );
    });

    return (
        <div className="game-info">
          <button className="game-button" onClick={() => this.reverse()}>Reverse</button>
          <ol>{moves}</ol>
        </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMoves)
