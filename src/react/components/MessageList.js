import React, { Component } from "react";
import { Card } from "../components";

const fakeMessages = [
  {
    id: 2114,
    text: "ping",
    username: "And1drew",
    createdAt: "2019-12-12T20:08:39.281Z",
    likes: [
      {
        id: 3140,
        username: "Julia3434",
        messageId: 2114,
        createdAt: "2019-12-12T20:54:47.629Z"
      },
      {
        id: 3141,
        username: "And1drew",
        messageId: 2114,
        createdAt: "2019-12-12T21:33:38.977Z"
      }
    ]
  },
  {
    id: 2112,
    text: "test test",
    username: "slenderdan",
    createdAt: "2019-12-12T14:48:43.168Z",
    likes: []
  }
];

class MessageList extends Component {
  render() {
    return fakeMessages.map(message => {
      return (
        <Card>
          <Card.Content header={message.username} />
          <Card.Content description={message.text} />
          <Card.Content extra>
            {/* <Icon name="user" />4 Friends */}
            Created: {new Date(message.createdAt).toDateString()}
          </Card.Content>
        </Card>
      );
      // <div>
      //   <h4>{message.username}</h4>
      //   <p>{message.text}</p>
      //   <p>Created: {message.createdAt}</p>
      // </div>;
    });
  }
}

export default MessageList;
