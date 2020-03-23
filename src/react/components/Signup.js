import React from "react";
import { connect } from "react-redux";
import { SignupForm } from ".";
// import { signup } from "../../redux";

class Signup extends React.Component {
    state = { 
        username: "", 
        password: "" 
    };

    render() {
        // const { loading, error } = this.props;
        return (
            <SignupForm>

            </SignupForm>
        )
    };
}

export default connect(  
    state => ({
        result: state.auth.signup.result,
        loading: state.auth.signup.loading,
        error: state.auth.signup.error
    }),
)(Signup);
