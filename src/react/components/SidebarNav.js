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
      <div id="sidebar-menu">
        <h1 id="title">Klutter</h1>
        <h1 id="short-title">Kl</h1>
        <div id="sidebar-menu-links">
          {this.props.isAuthenticated && (
            <Menu pointing secondary vertical>
              <Link to="/profiles/:username">
                <Menu.Item
                  name="profile"
                  active={activeItem === "profile"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/messagefeed">
                <Menu.Item
                  name="message feed"
                  active={activeItem === "message feed"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/" onClick={this.handleLogout}>
                <Menu.Item
                  name="logout"
                  active={activeItem === "logout"}
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
