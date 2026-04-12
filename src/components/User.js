import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    // console.log("grandchild constructor called");

    this.state = {
      count: 0,
    };
  }
  render() {
    // console.log("grandchild render called");

    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }

  componentDidMount() {
    // console.log("grandchild componentDidMount called");
  }
}

export default User;
