import React, { Component } from "react";
import { connect } from "react-redux";
import { Message } from ".";
// import { userIsAuthenticated } from "../HOCs";
import { listMessage } from "../../redux";

class MessageList extends Component {
  componentDidMount = () => {
    this.props.listMessage(100, 0).then(val => console.log(val));
  };

  render() {
    return (
      <>
        <Message />
      </>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.listMessage.result,
    loading: state.messages.listMessage.loading,
    error: state.messages.listMessage.error
  }),
  { listMessage }
)(MessageList);
