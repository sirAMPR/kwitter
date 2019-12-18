import React, { Component } from "react";

class CreateUserForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="displayName">Display name</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="text" />
        <button type="submit">Register Your Account</button>
      </form>
    );
  }
}

export default CreateUserForm;
