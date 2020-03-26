import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { createUser } from "../../redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import "./SignupForm.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      displayName: "",
      password: ""
    };
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSignup = e => {
    e.preventDefault();
    this.props.createUser(this.state);
    return this.props.history.push("/");
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="signup-form-wrapper">
        <h1>Sign Up for Klutter!</h1>
        <Form id="signup-form" onSubmit={this.handleSignup}>
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              name="username"
              autoFocus
              placeholder="Username"
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Display Name</label>
            <input
              type="text"
              name="displayName"
              placeholder="Display Name"
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit" disabled={loading}>
            Register
          </Button>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default connect(null, { createUser })(withRouter(SignupForm));
