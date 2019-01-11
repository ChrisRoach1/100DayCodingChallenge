import React, { Component } from "react";
import Form from "./components/Form";
import "./index.css";

class App extends Component {
  state = {
    fullName: "",
    age: "",
    school: "",
    profession: "",
    switchScene: true
  };

  setFormData = form => {
    this.setState({
      fullName: form.fullName,
      age: form.age,
      school: form.school,
      profession: form.profession,
      switchScene: false
    });
  };

  bringBackForm = () => {
    this.setState({
      fullName: "",
      age: "",
      school: "",
      profession: "",
      switchScene: true
    });
  };

  renderFinishedForm = () => {
    return (
      <div className="finished-form">
        <p className="form-para">
          Hi my name is {this.state.fullName} and I am {this.state.age}.
        </p>
        <p className="form-para">
          I went to {this.state.school} and now I am (a) {this.state.profession}
          .
        </p>
        <button className="para-btn" onClick={this.bringBackForm}>
          Back!
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="main">
        <h1>Simple Form Generator</h1>
        {/* <Form formSubmit={this.setFormData} /> */}
        {this.state.switchScene ? <Form formSubmit={this.setFormData} /> : null}
        {this.state.switchScene ? null : this.renderFinishedForm()}
      </div>
    );
  }
}

export default App;
