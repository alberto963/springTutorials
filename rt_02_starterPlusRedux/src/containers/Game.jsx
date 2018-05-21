import React from "react"
import { connect } from "react-redux"
import "./../index.css"

import { click, check } from "../actions/index"
import Board from "./../components/Board"

const mapStateToProps = (state, ownProps) => {
  return {
    squares: state.click.squares,
    xIsNext: state.click.xIsNext,
    status: state.check.status,
  }
}

const mapDispatchToProps = {
  click,
  check,
}

class Game extends React.Component {

  clickActions(i) {
    this.props.check(i, this.props.squares, this.props.xIsNext)
    this.props.click(i, this.props.status)
  }

  render() {
    return (
      <div className="game-board">
        <Board squares={this.props.squares} click={i => this.clickActions(i)} />
      </div>
    )
  }
}

// export default Game
export default connect(mapStateToProps, mapDispatchToProps)(Game)
