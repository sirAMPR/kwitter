import React, { Component } from 'react';
import { Button, Icon } from "semantic-ui-react"
import { connect } from "react-redux"
import {deleteMessage} from "../../redux"

// this.props.id
class DeleteMessageButton extends Component {
    handleDelete = e => {
        e.preventDefault();
        this.props.deleteMessage(this.props.id)
    }

    render() {
        return (
            <Button onClick={this.handleDelete} icon>
                <Icon name='trash' />
                Delete
            </Button>
        )
    }
}

export default connect(
    state => ({
        result: state.messages.deleteMessage.result,
        loading: state.messages.deleteMessage.loading,
        error: state.messages.deleteMessage.error
    }),
    { deleteMessage }
)(DeleteMessageButton);