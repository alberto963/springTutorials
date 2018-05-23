import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid"

import { jump, check  } from "../actions/index";

import "./../index.css";

const mapStateToProps = (state, ownProps) => {
  return {
    history: state.click.history,
    step: state.jump.step,
    xIsNext: state.click.xIsNext,
  }
}

const mapDispatchToProps = {
  jump,
  check,
};

class GameMoves extends React.Component {

  clickActions(move, i) {
    this.props.jump(i, this.props.history[move].squares, move);
    this.props.check(i, this.props.history[move].squares, this.props.xIsNext, move);
  }

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
      const imove = hstep.i

      return (
        <li key={uuidv1()}>
          <button className="game-button" onClick={() => this.clickActions(move, imove)} currentmove={currentmove}>{desc}</button>
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
