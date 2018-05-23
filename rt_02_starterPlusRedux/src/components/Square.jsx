import React from "react";
import { connect } from "react-redux";
import { click, check } from "../actions/index";

import "./../index.css";

const mapStateToProps = (state, ownProps) => {
  return {
    history: state.click.history,
    xIsNext: state.click.xIsNext,
    status: state.check.status,
    winSequence: state.check.winSequence,
    stepNumber: state.check.stepNumber,
  };
};

const mapDispatchToProps = {
  click,
  check
};

class Square extends React.Component {
  clickActions() {
    let i = this.props.num
    this.props.click(i, this.props.stepNumber, this.props.status);
    this.props.check(i, this.props.history[this.props.stepNumber].squares, this.props.xIsNext);
  }

  render() {
    let isWinner = this.props.winSequence && this.props.winSequence.includes(this.props.num);
    isWinner = isWinner ? isWinner.toString() : "false";

    let square = this.props.history[this.props.stepNumber].squares[this.props.num]

    return (
      <button className="square-row" onClick={() => this.clickActions()}>
        <div>
          <span className="num">{this.props.num}</span>
          <span className="square" iswinner={isWinner}>
            {square}
          </span>
        </div>
      </button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
