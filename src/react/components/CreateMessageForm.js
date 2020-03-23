import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button } from "../components";
import { addMessage } from "../../redux";

class CreateMessageForm extends Component {
  state = {
    text: ""
  };

  handlePost = e => {
    e.preventDefault();
    this.props.addMessage(this.state);
    this.setState({ text: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handlePost}>
          <Input
            type="text"
            name="text"
            placeholder="Add your message"
            onChange={this.handleChange}
          ></Input>
          <Button type="submit">Post</Button>
        </form>
      </>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.addMessage.result,
    loading: state.messages.addMessage.loading,
    error: state.messages.addMessage.error
  }),
  { addMessage }
)(CreateMessageForm);
