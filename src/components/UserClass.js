import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child constructor called");

    this.state = {
      count: 0,
    };
  }
  render() {
    // console.log("child render called");

    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count
        </button>
        <User />
      </div>
    );
  }

  componentDidMount() {
    // console.log("child componentDidMount called");
  }
}

export default UserClass;
