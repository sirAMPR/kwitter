import React from "react";
import { connect } from "react-redux";
import { getUser, setProfilePic } from "../../redux";
import { domain } from "../../redux/helpers";
import { Card, Image } from "semantic-ui-react"

const fakeUser = {
  pictureLocation: null,
  username: "benmckenzie",
  displayName: "ben",
  about: "hello, its me",
  googleId: null,
  createdAt: "2020-03-10T14:41:55.829Z",
  updatedAt: "2020-03-10T14:41:55.829Z"
};

class ProfileCard extends React.Component {
  componentDidMount = () => {
    this.props.getUser().then(val =>
      this.setState({
        displayName: val.payload.user.displayName,
        pictureLocation: val.payload.user.pictureLocation
      })
    );
  };
  state = {
    displayName: "",
    pictureLocation: ""
  };
render() {
  return(
  <Card>
    <Image src={domain + this.state.pictureLocation} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{fakeUser.username}</Card.Header>
      <Card.Meta>
<span className='date'>{fakeUser.displayName}</span>
      </Card.Meta>
      <Card.Description>
        {fakeUser.about}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <p> Created{fakeUser.createdAt}</p>
   <p> Last Updated:{fakeUser.updatedAt} </p>
    </Card.Content>
  </Card>
  )
 }
}




  // render() {
  //   return (
  //     <>
  //       <div>{this.state.displayName}</div>
  //       <img alt="profile-avatar" src={domain + this.state.pictureLocation}></img>
  //     </>
  //   );
  // }


export default connect(
  state => ({
      result: state.user.getUser.result,
      loading: state.user.getUser.loading,
      error: state.user.getUser.error
  }),
  { getUser }
)(ProfileCard);
