import React from "react";
import { connect } from "react-redux";
import { getUser /*setProfilePic*/ } from "../../redux";
import { domain } from "../../redux/helpers";
import { Button, Card, Image, Modal, Header } from "semantic-ui-react";
import "./ProfileCard.css";

class ProfileCard extends React.Component {
  state = {
    pictureLocation: "",
    username: "",
    displayName: "",
    about: "",
    googleId: "",
    createdAt: "",
    updatedAt: ""
  };

  componentDidMount = () => {
    this.props.getUser().then(val =>
      this.setState({
        pictureLocation: val.payload.user.pictureLocation,
        username: val.payload.user.username,
        displayName: val.payload.user.displayName,
        about: val.payload.user.about,
        googleId: val.payload.user.googleId,
        createdAt: val.payload.user.createdAt,
        updatedAt: val.payload.user.updatedAt
      })
    );
  };

  render() {
    const createDate = new Date(this.state.createdAt);
    const updateDate = new Date(this.state.updatedAt);

    return (
      <div className="wrapper">
        <Card id="card">
          {/* <Image src={domain + this.state.pictureLocation} wrapped ui={false} /> */}
          <Card.Content>
            <Card.Header>{this.state.displayName}</Card.Header>
            <Card.Meta>
              <span className="date">@{this.state.username}</span>
            </Card.Meta>
            <Card.Description>{this.state.about}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p> Joined: {createDate.toDateString()}</p>
            <p> Last Updated: {updateDate.toDateString()} </p>
          </Card.Content>
        </Card>
        <Image
          id="avatar"
          src={domain + this.state.pictureLocation}
          size="medium"
          circular
        />
        <Modal
          trigger={
            <Button className="edit-profile-button">Edit Profile</Button>
          }
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        {/* <Button className="edit-profile-button">Edit profile</Button> */}
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.user.getUser.result,
    loading: state.user.getUser.loading,
    error: state.user.getUser.error
  }),
  { getUser }
)(ProfileCard);
