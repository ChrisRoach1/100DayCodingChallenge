import React from "react";
import { render } from "react-dom";
import "babel-polyfill";
import "isomorphic-fetch";
class App extends React.Component {
  state = {
    test: "",
    loaded: false,
    sending: {
      name: "",
      age: ""
    },
    didPost: false,
    response: ""
  };

  componentDidMount = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/test", true);
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      this.setState({ test: data.message, loaded: true });
    };
    xhr.send();
    console.log(this.state.test);
  };

  showdata = () => {
    return (
      <div>
        <h1>{this.state.test}</h1>
      </div>
    );
  };

  loading = () => {
    return (
      <div>
        <h1>LOADING DATA</h1>
      </div>
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = JSON.stringify(this.state.sending);
    fetch("/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(response => response.json())
      .then(data => {
        data.message === "success"
          ? console.log("we in it")
          : console.log("we out here");
      });
    console.log(this.state.sending);
  };

  handleName = e => {
    let sending = { ...this.state.sending };
    sending.name = e.target.value;
    this.setState({ sending });
  };

  handleAge = e => {
    let sending = { ...this.state.sending };
    sending.age = e.target.value;
    this.setState({ sending });
  };

  postform = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          onChange={this.handleName}
          value={this.state.sending.name}
        />
        <label>Age</label>
        <input
          type="text"
          onChange={this.handleAge}
          value={this.state.sending.age}
        />
        <input type="submit" value="submit" />
      </form>
    );
  };


  render() {
    return <div>{this.postform()}</div>;
  }
}

render(<App />, document.getElementById("app"));
