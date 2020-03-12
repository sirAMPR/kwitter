import React, { Component } from 'react';
import { Card} from "semantic-ui-react"

const fakeMessages = [
    {
    id: 2411,
    text: "Happy Tuesday",
    username: "004262009",
    createdAt: "2020-03-10T13:08:24.033Z",
    likes: []
  },
  {
    id: 2410,
    text: "the big oof",
    username: "Rcharity",
    createdAt: "2020-03-10T06:38:21.014Z",
    likes: [
      {
        id: 3412,
        username: "004262009",
        messageId: 2410,
        createdAt: "2020-03-10T13:08:12.620Z"
      }
    ]
  },
]

class MessageList extends Component {
    render() {
        return fakeMessages.map(message => {
            return (
                <Card>
                  <Card.Content header={message.username} />
                  <Card.Content description={message.text} />
                  <Card.Content extra>
                    {/* <Icon name='user' />4 Friends */}
                    Created: {new Date(message.createdAt).toDateString()}
                  </Card.Content>
                </Card>
            )
        // <div>
        //     <h4>{message.username}</h4>
        //     <p>{message.text}</p>
        // <p>Created: {message.createdAt}</p>
        // </div>
        });
    }
}

export default MessageList;