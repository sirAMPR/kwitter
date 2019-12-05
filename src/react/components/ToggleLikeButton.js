import React from "react";
import { withAsyncAction } from "../HOCs";

class ToggleLikeButton extends React.Component {
  handleToggleLike = event => {
    this.props.addLike(this.props.messageId);
  };

  render() {
    return <button onClick={this.handleToggleLike}>Like/Unlike</button>;
  }
}

/*
mapStateToProps
  loading
  error
  result

mapDispatchToProps
  addLike

  loggedInUsername
*/

export default withAsyncAction("likes", "addLike")(ToggleLikeButton);
