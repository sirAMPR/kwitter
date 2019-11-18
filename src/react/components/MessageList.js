import React from "react";
import MessageCard from "./MessageCard";

const messages = [
  {
    id: 938,
    text: "This is my second message!",
    username: "testuser",
    createdAt: "2019-11-18T16:07:42.936Z",
    likes: []
  },
  {
    id: 937,
    text: "Hello World!",
    username: "testuser",
    createdAt: "2019-11-18T15:52:56.879Z",
    likes: []
  }
];

class MessageList extends React.Component {
  render() {
    return messages.map(message => {
      return (
        <MessageCard
          username={message.username}
          text={message.text}
          createdAt={message.createdAt}
        />
      );
    });
  }
}

export default MessageList;
