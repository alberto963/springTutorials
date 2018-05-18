import React from 'react'
import { connect } from 'react-redux'
import './../index.css'

import { click } from "../actions/index"
import Board from './../components/Board'

const mapStateToProps = (state, ownProps) => {
  return { 
    squares: state.click.squares,
    xIsNext: state.click.xIsNext,
    status: state.click.status,
  }
}

const mapDispatchToProps = {
  click,
}

class Game extends React.Component {   

  render() {

    // const winSequence = calculateWinSequence(this.props.squares)

    // let status;
    // if (winSequence) {
    //   status = 'Winner: ' + (!this.props.xIsNext ? 'X' : 'O')
    // }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.props.squares} click={(i) => this.props.click(i)} />
        </div>
        <div className="game-info">
          <div>{this.props.status}</div>
        </div>
      </div>
    )
  }
}

// export default Game
export default connect(mapStateToProps, mapDispatchToProps)(Game)
