import React, { Component } from "react";
import { Card, Image, Button } from "../components";
import { withAsyncAction } from "../HOCs";

const fakeUser = {
  pictureLocation: null,
  username: "taylorhurt",
  displayName: "Taylor Hurt",
  about: "This is my about info",
  googleId: null,
  createdAt: "2019-12-16T18:47:28.723Z",
  updatedAt: "2019-12-16T18:47:28.723Z"
};

class UserInfoCard extends Component {
  handleDeleteUser = event => {
    console.log("clicked delete user button");
    console.log(this.props.deleteUser);
    this.props.deleteUser();
  };

  render() {
    return (
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{fakeUser.username}</Card.Header>
          <Card.Meta>
            <span className="date">{fakeUser.displayName}</span>
          </Card.Meta>
          <Card.Description>{fakeUser.about}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Created: {new Date(fakeUser.createdAt).toDateString()}</p>
          <p>Last Updated: {new Date(fakeUser.updatedAt).toDateString()}</p>
        </Card.Content>
        <Button onClick={this.handleDeleteUser}>Delete your account</Button>
      </Card>
    );
    // return (
    //   <>
    //     <h3>{fakeUser.username}</h3>
    //     <h4>{fakeUser.displayName}</h4>
    //     <p>{fakeUser.about}</p>
    //     <p>Created: {fakeUser.createdAt}</p>
    //     <p>Last Updated: {fakeUser.updatedAt}</p>
    //   </>
    // );
  }
}

// this.props.loading
// this.props.error
// this.props.result
// this.props.deleteUser
export default withAsyncAction("users", "deleteUser")(UserInfoCard);
