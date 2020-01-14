import React, { Component } from "react";
import { Form, Button } from "../components";
import { withAsyncAction } from "../HOCs";

class CreateUserForm extends Component {
  state = {
    username: "",
    displayName: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRegister = event => {
    this.props.createUser(
      this.state.username,
      this.state.displayName,
      this.state.password
    );
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username</label>
          <input
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Display Name</label>
          <input
            name="displayName"
            placeholder="Display Name"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit" onClick={this.handleRegister}>
          Register
        </Button>
      </Form>
    );
    // return (
    //   <form>
    //     <label htmlFor="username">Username</label>
    //     <input type="text" />
    //     <label htmlFor="displayName">Display name</label>
    //     <input type="text" />
    //     <label htmlFor="password">Password</label>
    //     <input type="text" />
    //     <button type="submit">Register Your Account</button>
    //   </form>
    // );
  }
}

// this.props.loading
// this.props.error
// this.props.result
// this.props.createUser
export default withAsyncAction("users", "createUser")(CreateUserForm);
