import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";

const fakeUser = {
  username: "BobJones",
  displayName: "Mr. Bob Jones",
  about: "string",
  createdAt: "2019-11-15T16:09:13.282Z",
  updatedAt: "2019-11-15T16:09:13.282Z",
  pictureLocation: "string",
  googleId: "string"
};

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <p>{fakeUser.username}</p>
        <p>{fakeUser.displayName}</p>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
