import React from "react";
import { withAsyncAction } from "../HOCs";
import { Spinner, DeleteUserButton, UploadUserPicture } from ".";

// const fakeUser = {
//   pictureLocation: null, // URI to download the picture
//   username: "testuser",
//   displayName: "Taylor Hurt",
//   about: "",
//   googleId: null,
//   createdAt: "2019-11-18T15:10:16.100Z",
//   updatedAt: "2019-11-18T15:10:16.100Z"
// };

class UserCard extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.username);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.username !== prevProps.username) {
      this.props.getUser(this.props.username);
    }
  }

  render() {
    if (this.props.result === null) {
      return <Spinner name="circle" color="blue" />;
    }

    const user = this.props.result.user;

    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1em",
          margin: "2em",
          maxWidth: "20em"
        }}
      >
        <img
          style={{ maxWidth: "20em" }}
          src={
            user.pictureLocation
              ? "https://kwitter-api.herokuapp.com" + user.pictureLocation
              : "http://simpleicon.com/wp-content/uploads/user1.svg"
          }
        />
        <h3>{user.displayName}</h3>
        <p>{user.username}</p>

        {user.about ? (
          <p>{user.about}</p>
        ) : (
          <p style={{ color: "grey" }}>You do not have about details yet</p>
        )}

        <p>Created: {new Date(user.createdAt).toDateString()}</p>
        <p>Last Updated: {new Date(user.updatedAt).toDateString()}</p>
        <DeleteUserButton username={this.props.username} />
        <UploadUserPicture username={this.props.username} />
      </div>
    );
  }
}

/*
mapStateToProps
  loading
  error
  result

mapDispatchToProps
  getUser
*/
export default withAsyncAction("users", "getUser")(UserCard);
