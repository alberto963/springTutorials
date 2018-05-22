import React from "react";
import { connect } from "react-redux";
import { click, check } from "../actions/index";

import "./../index.css";

const mapStateToProps = (state, ownProps) => {
  return {
    squares: state.click.squares,
    xIsNext: state.click.xIsNext,
    status: state.check.status,
    winSequence: state.check.winSequence
  };
};

const mapDispatchToProps = {
  click,
  check
};

class Square extends React.Component {
  clickActions() {
    let i = this.props.num
    this.props.check(i, this.props.squares, this.props.xIsNext);
    this.props.click(i, this.props.status);
  }

  render() {
    let isWinner = this.props.winSequence && this.props.winSequence.includes(this.props.num);
    isWinner = isWinner ? isWinner.toString() : "false";

    return (
      <button className="square-row" onClick={() => this.clickActions()}>
        <div>
          <span className="num">{this.props.num}</span>
          <span className="square" isWinner={isWinner}>
            {this.props.squares[this.props.num]}
          </span>
        </div>
      </button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
