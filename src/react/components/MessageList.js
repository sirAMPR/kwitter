import React, { Component } from "react";
import { connect } from "react-redux";
import { Message } from ".";
// import { userIsAuthenticated } from "../HOCs";
import { listMessage } from "../../redux";

class MessageList extends Component {
  state = {
    messages: []
  };

  componentDidMount = () => {
    this.props
      .listMessage(100, 0, this.props.isUserList ? this.props.username : null)
      .then(val => this.setState({ messages: val.payload.messages }));
  };

  render() {
    return (
      <>
        {this.state.messages.map(msg => (
          <Message
            createdAt={msg.createdAt}
            key={msg.id}
            likes={msg.likes}
            text={msg.text}
            username={msg.username}
          />
        ))}
      </>
    );
  }
}

export default connect(
  state => ({
    result: state.messages.listMessage.result,
    loading: state.messages.listMessage.loading,
    error: state.messages.listMessage.error,
    username: state.auth.login.result.username
  }),
  { listMessage }
)(MessageList);
