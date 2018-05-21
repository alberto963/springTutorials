import React from "react";
import { connect } from "react-redux";
import "./../index.css";

import { click, check } from "../actions/index";
import Board from "./../components/Board";

const mapStateToProps = (state, ownProps) => {
  return {
    squares: state.click.squares,
    xIsNext: state.click.xIsNext,
    status: state.click.status
  };
};

const mapDispatchToProps = {
  click,
  check,
};

class Game extends React.Component {
  clickActions(i) {
    this.props.click(i);
    this.props.check(i, this.props.squares);
  }
  render() {
    // const winSequence = calculateWinSequence(this.props.squares)

    // let status;
    // if (winSequence) {
    //   status = 'Winner: ' + (!this.props.xIsNext ? 'X' : 'O')
    // }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.props.squares} click={i => this.clickActions(i)} />
        </div>
        <div className="game-info">
          <div>{this.props.status}</div>
        </div>
      </div>
    );
  }
}

// export default Game
export default connect(mapStateToProps, mapDispatchToProps)(Game);
