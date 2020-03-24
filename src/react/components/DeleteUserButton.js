import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { deleteUser } from "../../redux";

class DeleteUser extends React.Component {
  handleDelete = e => {
    e.preventDefault();
    this.props.deleteUser();
  };

  render() {
    return (
      <Button className="ui red" onClick={this.handleDelete}>
        Delete User
      </Button>
    );
  }
}

export default connect(null, { deleteUser })(DeleteUser);
