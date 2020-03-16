import React, { Component } from 'react';
import { Menu, MessageList } from "../components"
import { userIsAuthenticated} from "../HOCs"
import CreateMessageForm from './CreateMessageForm';

class MessageFeed extends Component {
    render() {
        return(
            <>
            <Menu isAuthenticated= { this.props.isAuthenticated} />
        <h2>MessageFeed</h2>
        <CreateMessageForm/>
        <MessageList/>
        </>
        )
    }
}

export default userIsAuthenticated(MessageFeed);