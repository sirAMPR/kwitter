import React from "react";
import { connect } from "react-redux";
import { getUser, setProfilePic } from "../../redux";
import { domain } from "../../redux/helpers";

class ProfileCard extends React.Component {
  state = {
    displayName: "",
    pictureLocation: "",
    picture: ""
  };

  componentDidMount = () => {
    this.props.getUser().then(val =>
      this.setState({
        displayName: val.payload.user.displayName,
        pictureLocation: val.payload.user.pictureLocation
      })
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setProfilePic(this.state);
  };

  handleChange = e => {
    const file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      this.setState({ picture: reader.result });
    };

    reader.readAsBinaryString(file);
  };

  render() {
    return (
      <>
        <div>{this.state.displayName}</div>
        <img src={domain + this.state.pictureLocation}></img>
        <br></br>
        <label htmlFor="avatar">Choose a profile picture</label>
        <input
          type="file"
          id="avatar"
          onChange={this.handleChange}
          accept="image/png, image/jpeg, image/gif"
        ></input>
        <br></br>
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
