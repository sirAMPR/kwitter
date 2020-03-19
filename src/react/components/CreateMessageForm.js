import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux";

class CreateMessageForm extends Component {
  state = {
    message: ""
  };

  handlePost = e => {
    if (e.key === "Enter") {
      this.props.addMessage(this.state);
      //   this.setState({ message: "" });
    }
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handlePost}>
          <input
            placeholder="Place Kweet here"
            onKeyDown={this.handlePost}
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
