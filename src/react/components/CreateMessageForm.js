import React, { Component } from "react";
import { Input, Button, Form, Spinner } from "../components";
import { withAsyncAction } from "../HOCs";

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
          <Button
            type="submit"
            onClick={this.handleCreateMessage}
            disabled={this.props.loading}
          >
            Create Message
          </Button>
        </Form>
        {this.props.loading && <Spinner name="circle" color="blue" />}
        {this.props.error && (
          <p style={{ color: "red" }}>{this.props.error.message}</p>
        )}
      </>
    );
  }
}

// this.props.loading
// this.props.error
// this.props.result
// this.props.createMessage
export default withAsyncAction("messages", "createMessage")(CreateMessageForm);
