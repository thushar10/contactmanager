import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidUpdate() {
    console.log("Component did Update");
  }

  componentWillUpdate() {
    console.log("Component will Update");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  static getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
