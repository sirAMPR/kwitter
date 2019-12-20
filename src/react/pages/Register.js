import React from "react";
import { Menu, CreateUserForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Register extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Register Your Account</h2>
        <CreateUserForm />
        <Link to="/">Go Home</Link>
      </>
    );
  }
}

export default userIsNotAuthenticated(Register);
