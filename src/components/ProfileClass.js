import React from "react";
class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h3>Name: {this.props.name}</h3>
      </div>
    );
  }
}
export default Profile;
