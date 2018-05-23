import React from "react";
import { connect } from "react-redux";
import "./../index.css";

const mapStateToProps = (state, ownProps) => {
  return {
    history: state.click.history,
    stepNumber: state.check.stepNumber,
  }
}

class GameMoves extends React.Component {

  
  render() {
    const history = this.props.history;
    const stepNumber = this.props.stepNumber;
    const ascending = true;

    const moves = history.map((step, move) => {
      // Added for improvement #4 (Add a toggle button that lets you sort the moves in either ascending or descending order.)
      const pos = ascending ? move : history.length - move - 1 
      const desc = pos ? 'Go to move #' + pos :'Go to game start'
      const location = pos ? 'Move Location col=' + (step.i % 3) + ', row=' + Math.floor(step.i/3) + ', player=' + step.squares[step.i] : ''
      const currentmove = stepNumber === move ? 'true' : 'false' // Added for improvement #2 (Bold the currently selected item in the move list.)

      return (
        <li key={move}>
          <button className="game-button" onClick={() => this.jumpTo(move)} currentmove={currentmove}>{desc}</button>
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

export default connect(mapStateToProps, null)(GameMoves)
