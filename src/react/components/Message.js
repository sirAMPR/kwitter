import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import ToggleLikeButton from "./ToggleLikeButton";
import DeleteMessageButton from "./DeleteMessageButton";
import { connect } from "../HOCs";

// const fakeMessages = [
//     {
//     id: 2411,
//     text: "Happy Tuesday",
//     username: "004262009",
//     createdAt: "2020-03-10T13:08:24.033Z",
//     likes: []
//   },
//   {
//     id: 2410,
//     text: "the big oof",
//     username: "Rcharity",
//     createdAt: "2020-03-10T06:38:21.014Z",
//     likes: [
//       {
//         id: 3412,
//         username: "004262009",
//         messageId: 2410,
//         createdAt: "2020-03-10T13:08:12.620Z"
//       }
//     ]
//   },
// ]

class Message extends Component {
  render() {
    // return fakeMessages.map(message => {
    return (
      <Card>
        <Card.Content header={this.props.username} />
        <Card.Content description={this.props.text} />
        <Card.Content extra>
          {/* <Icon name='user' />4 Friends */}
          <p>Created: {new Date(this.props.createdAt).toDateString()}</p>
          {/* <ToggleLikeButton likes={this.props.likes} /> */}
          {this.props.username === this.props.logInUser &&
          <DeleteMessageButton id={this.props.id} />
      }
        </Card.Content>
      </Card>
    );
    // });
  }
}

export default connect(state=>({logInUser: state.auth.login.result.username}))(Message)
