import React from "react";
import { Menu, CreateUserForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Register extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Register Your Account</h2>
        <CreateUserForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Register);
