import React from "react";
import { connect } from "react-redux";
import { setProfilePic } from "../../redux";
import { Button } from "semantic-ui-react";

class ProfilePicSubmit extends React.Component {
  state = {
    picture: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setProfilePic(e.target);
  };

  render() {
    return (
      <>
        {/* <label htmlFor="avatar">Choose a profile picture</label> */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="file"
            name="picture"
            accept="image/png, image/jpeg, image/gif"
          ></input>
          <Button type="submit">Save Profile</Button>
        </form>
      </>
    );
  }
}

export default connect(
  state => ({
    result: state.user.setProfilePic.result,
    loading: state.user.setProfilePic.loading,
    error: state.user.setProfilePic.error
  }),
  { setProfilePic }
)(ProfilePicSubmit);
