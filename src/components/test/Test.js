import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ body: data }));
  }

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // static getDerivedStateFromProps(props, state) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  render() {
    const { body } = this.state;

    console.log(body);

    return (
      <div>
        <h1 className="display-4 text-center">Test Component</h1>
        <ul className="list-group">
          {body &&
            body.map(user => (
              <li key={user.id} className="list-group-item">
                {user.name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Test;
