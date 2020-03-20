import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class DeleteMessageButton extends Component {
  render() {
    return (
      <Button icon>
        <Icon name="trash" />
        Delete
      </Button>
    );
  }
}

export default DeleteMessageButton;
