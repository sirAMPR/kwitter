import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import {ProfileCard}from "./components"
class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ProfileCard />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
