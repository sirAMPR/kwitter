import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { ProfileCard, ProfilePicSubmit }from "./components";
class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ProfileCard/>
        <ProfilePicSubmit/>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
