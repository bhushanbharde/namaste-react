import React from "react";
import UserConext from "../utils/UserConext";
import Header from "./Header";
import UserClass from "./UserClass";

class AboutClass extends React.Component {

  constructor(props) {
    super(props);
    // console.log("parent constructor called");
  }

  render() {
    // console.log("parent render called");
    return (
      <div>
        <div className="px-60 py-20">
          <h1 className="text-3xl font-semibold mb-4">This is About Us page</h1>
          <UserClass name={"Bhushan"} location={"Pune"} />
          logged In User:
          {/* React Context in Class based component */}
          <UserConext.Consumer>
            {(data) => <h1>{data.loggedInUser}</h1>}
          </UserConext.Consumer>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log("parent componentDidMount called");
  }
}

export default AboutClass;
