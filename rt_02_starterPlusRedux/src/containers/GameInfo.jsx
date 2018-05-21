import React from "react";
import { connect } from "react-redux";
import "./../index.css";

const mapStateToProps = (state, ownProps) => {
  return {
    status: state.check.status,
  }
}

class GameInfo extends React.Component {

  render() {

    return (
      <div className="game-info">
        <div>{this.props.status}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(GameInfo)
