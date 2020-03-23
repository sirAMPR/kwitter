import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { createUser } from "../../redux";
import "./LoginForm.css";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            displayName: "",
            password: "",
            /* password_confirmation: "" */
        }
        this.handleSignup = this.handleSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSignup = e => {
        e.preventDefault();
        this.props.createUser(this.state);
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { loading, error } = this.props;
        return (
    <React.Fragment>
        <form id="signup-form" onSubmit={this.handleSignup}>
            <h1>Sign Up for Klutter!</h1>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                autoFocus
                required
                value={this.state.username} 
                onChange={this.handleChange}
            />
            <label htmlFor="displayName">Display Name</label>
            <input
                type="text"
                name="displayName"
                required
                value={this.state.displayName}
                onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                required
                value={this.state.password}
                onChange={this.handleChange}
            />
            {/* <label htmlFor="password_confirmation">Password confirmation</label>
            <input
                type="password" 
                name="password_confirmation" 
                required
                value={this.state.password_confirmation} 
                onChange={this.handleChange}
            /> */}
            <button type="submit" disabled={loading}>
                Register
            </button>
            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
        </form>
    </React.Fragment>
        )
    };
}

export default connect(null, { createUser })(SignupForm);

// Dylan's code
// import React, { Component } from "react";
// import {domain} from "./redux/helpers/index.js";
// export default class Registration extends Component {
    /* constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } */
    /* handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value 
        })
    } */
    /* handleSubmit(event) {
        event.preventDefault();
         const {
             email,
             password,
             password_confirmation,
         } = this.state,;
         domain.post("https://localhost:3000/users", {
         user: {
             email: email,
             password: password,
             password_confirmation: password_confirmation
         }
        },
        { withCredentials: true}
        
        )}*/
    /* render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={this.state.email} 
                onChange={this.handleChange} 
                required 
                />
                <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                required 
                />
                <input 
                type="password" 
                name="password_confirmation" 
                placeholder="Password confirmation" 
                value={this.state.password_confirmation} 
                onChange={this.handleChange} 
                required 
                />
            <button type="submit">Register </button>
            </form>
            </div>;
        }*/