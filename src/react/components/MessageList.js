import React from "react";
import MessageCard from "./MessageCard";
import { withAsyncAction } from "../HOCs";

// const messages = [
//   {
//     id: 938,
//     text: "This is my second message!",
//     username: "testuser",
//     createdAt: "2019-11-18T16:07:42.936Z",
//     likes: []
//   },
//   {
//     id: 937,
//     text: "Hello World!",
//     username: "testuser",
//     createdAt: "2019-11-18T15:52:56.879Z",
//     likes: []
//   }
// ];

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }

  render() {
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <MessageCard
            username={message.username}
            text={message.text}
            createdAt={message.createdAt}
          />
        );
      })
    );
  }
}

/*
mapStateToProps
  loading
  error
  result

mapDispatchToProps
  getMessages
*/
export default withAsyncAction("messages", "getMessages")(MessageList);
