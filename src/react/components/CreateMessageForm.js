import React, { Component } from "react";
import { Input, Button, Form } from "../components";
import { connect } from "../HOCs";
import { createMessage } from "../../redux/actionCreators";

class CreateMessageForm extends Component {
  state = {
    messageText: ""
  };

  handleCreateMessage = event => {
    // will call the action creator function which sends a fetch request to the api endpoint
    this.props.createMessage(this.state.messageText);
    this.setState({ messageText: "" });
  };

  handleChangeMessage = event => {
    this.setState({ messageText: event.target.value });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Field>
            <Input
              onChange={this.handleChangeMessage}
              value={this.state.messageText}
              placeholder="Add your message"
            />
          </Form.Field>
          <Button type="submit" onClick={this.handleCreateMessage}>
            Create Message
          </Button>
        </Form>
      </>
    );
  }
}

// this.props.createMessage
const mapDispatchToProps = {
  createMessage
};

export default connect(null, mapDispatchToProps)(CreateMessageForm);
