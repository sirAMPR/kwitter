import React from "react";
import { Link } from ".";

// const fakeMessage = {
//   id: 937,
//   text: "Hello World!",
//   username: "testuser",
//   createdAt: "2019-11-18T15:52:56.879Z",
//   likes: []
// };

class MessageCard extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1em",
          margin: "2em"
        }}
      >
        <Link to={`/profile/${this.props.username}`}>
          <h4>{this.props.username}</h4>
        </Link>
        <p>{this.props.text}</p>
        <p>{new Date(this.props.createdAt).toDateString()}</p>
      </div>
    );
  }
}

export default MessageCard;
