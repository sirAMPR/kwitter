import React from "react";

const fakeUser = {
  pictureLocation: null, // URI to download the picture
  username: "testuser",
  displayName: "Taylor Hurt",
  about: "",
  googleId: null,
  createdAt: "2019-11-18T15:10:16.100Z",
  updatedAt: "2019-11-18T15:10:16.100Z"
};

class UserCard extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1em",
          margin: "2em",
          maxWidth: "20em"
        }}
      >
        <img
          style={{ maxWidth: "20em" }}
          src={
            fakeUser.pictureLocation
              ? fakeUser.pictureLocation
              : "http://simpleicon.com/wp-content/uploads/user1.svg"
          }
        />
        <h3>{fakeUser.displayName}</h3>
        <p>{fakeUser.username}</p>

        {fakeUser.about ? (
          <p>{fakeUser.about}</p>
        ) : (
          <p style={{ color: "grey" }}>You do not have about details yet</p>
        )}

        <p>Created: {new Date(fakeUser.createdAt).toDateString()}</p>
        <p>Last Updated: {new Date(fakeUser.updatedAt).toDateString()}</p>
      </div>
    );
  }
}

export default UserCard;
