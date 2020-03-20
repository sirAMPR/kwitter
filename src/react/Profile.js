import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { ProfileCard, ProfilePicSubmit, Message } from "./components";
import { Grid } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Grid>
          <Grid.Column width={6}>
            <ProfileCard />
          </Grid.Column>
          <Grid.Column width={9}>
            <Message />
          </Grid.Column>
        </Grid>
        <ProfilePicSubmit />
        <DeleteUser />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
