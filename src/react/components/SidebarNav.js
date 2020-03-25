import React from "react";
import { Link } from "react-router-dom";
import "./SidebarNav.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
import { Menu } from "semantic-ui-react";

class SidebarNav extends React.Component {
  state = { activeItem: "profile" };
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div id="menu">
        <h1 id = "header">Klutter</h1>
        <div id="menu-links">
        {this.props.isAuthenticated && (
          <Menu pointing secondary vertical>
            <Link to="/profiles/:username">
              <Menu.Item
                name="Profile"
                active={activeItem === "profile"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/messagefeed">
              <Menu.Item
                name="Message Feed"
                active={activeItem === "Message Feed"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/" onClick={this.handleLogout}>
              <Menu.Item
                name="Logout"
                active={activeItem === "Logout"}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu>
        )}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error
  }),
  { logout }
)(SidebarNav);
