import React from "react";
import { Menu, UserList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class UserSearch extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>User Search</h2>
        <UserList />
      </>
    );
  }
}

export default userIsAuthenticated(UserSearch);
