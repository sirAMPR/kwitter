import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import ToggleLikeButton from "./ToggleLikeButton";
import DeleteMessageButton from "./DeleteMessageButton";

class Message extends Component {
  render() {
    return (
      <Card>
        <Card.Content header={this.props.username} />
        <Card.Content description={this.props.text} />
        <Card.Content extra>
          <p>Created: {new Date(this.props.createdAt).toDateString()}</p>
          <ToggleLikeButton likes={this.props.likes} id={this.props.id} />
          <DeleteMessageButton />
        </Card.Content>
      </Card>
    );
  }
}

export default Message;
