import React, { Component } from "react";
import { Form, Button } from "../components";

class CreateUserForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Display Name</label>
          <input placeholder="Display Name" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit">Register</Button>
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

export default CreateUserForm;
