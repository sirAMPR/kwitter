import React, { Component } from 'react';
import { Button, Icon, Label } from "semantic-ui-react"

class ToggleLikeButton extends Component {
    render() {
        return (
        <Button as='div' labelPosition='right'>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        {this.props.likes.length}
      </Label>
    </Button>
        )
       // return <button>Add/Remove Likes</button>
    }
}

export default ToggleLikeButton;