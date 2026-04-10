import React from "react";
import Header from "./Header";
import UserClass from "./UserClass";

class AboutClass extends React.Component {

  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  render() {
    console.log("parent render called");
    return (
      <div>
        <div className="container">
          <h1>This is About Us page</h1>
          <UserClass name={"Bhushan"} location={"Pune"} />
        </div>
      </div>
    )
  }

  componentDidMount() {
    console.log("parent componentDidMount called");
  }
}

export default AboutClass;
