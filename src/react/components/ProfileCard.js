import React from "react";
import { connect } from "react-redux";
import { getUser, setProfilePic } from "../../redux";
import { domain } from "../../redux/helpers";


class ProfileCard extends React.Component {
  state = {
    displayName: "",
    pictureLocation: ""
  };

  componentDidMount = () => {
    this.props.getUser().then(val =>
      this.setState({
        displayName: val.payload.user.displayName,
        pictureLocation: val.payload.user.pictureLocation
      })
    );
  };

  render() {
    return (
      <>
        <div>{this.state.displayName}</div>
        <img alt="profile-avatar" src={domain + this.state.pictureLocation}></img>
      </>
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
