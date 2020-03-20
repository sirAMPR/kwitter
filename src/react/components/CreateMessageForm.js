import React, { Component } from 'react';
import { Input, Button } from "../components"

class CreateMessageForm extends Component {
    render() {
        return (
        <>
        <Input placeholder="Add your message"/>
        <Button>Submit</Button>
        </>
        )
    }
}

export default CreateMessageForm;