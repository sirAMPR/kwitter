import React from "react";
import { withAsyncAction, connect } from "../HOCs";

class UploadUserPicture extends React.Component {
  handleUploadUserPicture = event => {
    console.log("upload activated");
    // event.target equal to <form>
    event.preventDefault();
    this.props.putUserPicture(event.target);
  };

  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
        <form onSubmit={this.handleUploadUserPicture}>
          <input type="file" name="picture" />
          <input type="submit" value="Upload Picture" />
        </form>
      )
    );
  }
}

/*
mapStateToProps
  loading
  error
  result

mapDispatchToProps
  putUserPicture

  loggedInUsername
*/

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "putUserPicture")(UploadUserPicture)
);
