import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import {
  ProfileCard,
  ProfilePicSubmit,
  MessageList,
  DeleteUserButton
} from "./components";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <ProfileCard />
        <MessageList isUserList={true} />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
