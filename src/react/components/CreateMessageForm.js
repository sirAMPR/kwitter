import React, { Component } from "react";
import { connect } from "react-redux";
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
          <input
            type="text"
            name="text"
            placeholder="Place Kweet here"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Post</button>
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
