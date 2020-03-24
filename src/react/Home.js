import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <h3>Klutter is a play on Clutter... get it?</h3>
        <LoginForm />
        <Link to="/signup-form">Sign Up for Klutter!</Link>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
