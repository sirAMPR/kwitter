import React from "react";
import { connect } from "react-redux";
import { getUser, /*setProfilePic*/ } from "../../redux";
import { domain } from "../../redux/helpers";
import { Card, Image } from "semantic-ui-react";

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
      <Card>
        <Image src={domain + this.state.pictureLocation} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.state.displayName}</Card.Header>
          <Card.Meta>
            <span className="date">{this.state.username}</span>
          </Card.Meta>
          <Card.Description>{this.state.about}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p> Joined: {createDate.toDateString()}</p>
          <p> Last Updated: {updateDate.toDateString()} </p>
        </Card.Content>
      </Card>
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
