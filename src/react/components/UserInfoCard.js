import React, { Component } from "react";
import { Card, Image } from "../components";

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

export default UserInfoCard;
