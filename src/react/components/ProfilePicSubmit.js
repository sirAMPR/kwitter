import React from "react";
import { connect } from "react-redux";
import { setProfilePic } from "../../redux";

class ProfilePicSubmit extends React.Component {
    state = {
      picture: ""
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.setProfilePic(e.target);
    };
  
    render() {
        return (
        <>
            <label htmlFor="avatar">Choose a profile picture</label>
            <form onSubmit={this.handleSubmit}>
            <input
                type="file"
                id="avatar"
                name="picture"
                accept="image/png, image/jpeg, image/gif"
            ></input>
            <input type="submit" value="Save Profile"></input>
            </form>
        </>
        )
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