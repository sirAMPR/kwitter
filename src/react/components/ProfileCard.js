import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux";

class ProfileCard extends React.Component {
  state = {
    displayName: ""
  };

  componentDidMount = () => {
    this.props
      .getUser()
      .then(val =>
        this.setState({ displayName: val.payload.user.displayName })
      );
    // this.props.getUser().then(val => this.setState({ displayName: val }));
  };

  render() {
    return (
      <div>{this.state.displayName}</div>
      // <div>{this.props.result.user.displayName}</div>
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
