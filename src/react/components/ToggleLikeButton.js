import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { like } from "../../redux";
import { connect } from "react-redux";

class ToggleLikeButton extends Component {
  handleLike = e => {
    e.preventDefault();
    // check if like exists
    if (this.props.likes.some(like => like.username === this.props.username)) {
      // delete like
    } else {
      // add like
      this.props.like({ messageId: this.props.id });
    }
  };

  render() {
    return (
      <Button as="div" labelPosition="right" onClick={this.handleLike}>
        <Button icon>
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic pointing="left">
          {this.props.likes.length}
        </Label>
      </Button>
    );
  }
}

export default connect(
  state => ({
    result: state.likes.like.result,
    loading: state.likes.like.loading,
    error: state.likes.like.error,
    username: state.auth.login.result.username
  }),
  { like }
)(ToggleLikeButton);
