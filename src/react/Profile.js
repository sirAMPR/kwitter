import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import {
  ProfileCard,
  ProfilePicSubmit,
  MessageList,
  DeleteUserButton
} from "./components";
import { Grid } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <ProfileCard />
        <MessageList isUserList={true} />
        <ProfilePicSubmit />
        <DeleteUserButton />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
