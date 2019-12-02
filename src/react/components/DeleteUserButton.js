import React from "react";
import { withAsyncAction } from "../HOCs";

class DeleteUserButton extends React.Component {
  handleDeleteUser = event => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmed) {
      this.props.deleteUser();
    }
  };

  render() {
    return <button onClick={this.handleDeleteUser}>Delete your account</button>;
  }
}

/*
mapStateToProps
  loading
  error
  result

mapDispatchToProps
  deleteUser
*/
export default withAsyncAction("users", "deleteUser")(DeleteUserButton);
