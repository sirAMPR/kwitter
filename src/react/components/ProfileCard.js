import React from "react";
import { connect } from "react-redux";
import { getUser, setProfilePic } from "../../redux";

class ProfileCard extends React.Component {
  state = {
    displayName: "",
    profileLocation: ""
  };

  componentDidMount = () => {
    this.props
      .getUser()
      .then(val =>
        this.setState({ displayName: val.payload.user.displayName })
      );
    // this.props.getUser().then(val => this.setState({ displayName: val }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setProfilePic(this.state.profileLocation);
  }

  handleChange = e => {
    this.setState({ profileLocation: e.target.value })
  }

  render() {
    return (
      <>
        <div>{this.state.displayName}</div>
        {/* <div>{this.props.result.user.displayName}</div> */}
        <label htmlFor="avatar">Choose a profile picture</label>
        <input type="file" id="avatar" onChange={this.handleChange}
          accept="image/png, image/jpeg, image/gif">
        </input>
        <button onClick={this.handleSubmit}>Save Profile</button>
      </>
    );
  }
}

export default connect(
  state => ({
    userData: {
      result: state.user.getUser.result,
      loading: state.user.getUser.loading,
      error: state.user.getUser.error
    },
    profilePic: {
      result: state.user.setProfilePic.result,
      loading: state.user.setProfilePic.loading,
      error: state.user.setProfilePic.error
    }
  }),
  { getUser, setProfilePic }
)(ProfileCard);
