import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../redux";

class DeleteUser extends React.Component {
  handleDelete = e => {
    e.preventDefault();
    this.props.deleteUser();
  };

  render() {
    return <button onClick={this.handleDelete}>Delete User</button>;
  }
}

export default connect(null, { deleteUser })(DeleteUser);
