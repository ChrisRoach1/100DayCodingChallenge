import React, { Component } from "react";
import "../index.css";

class Form extends Component {
  state = {
    fullName: "",
    age: "",
    school: "",
    profession: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      this.state.fullName.trim() === "" ||
      this.state.age.trim() === "" ||
      this.state.school.trim() === "" ||
      this.state.profession.trim() === ""
    ) {
      alert("Please fill in all fields!");
    } else {
      var form = this.state;
      this.props.formSubmit(form);
      this.setState({
        fullName: "",
        age: "",
        school: "",
        profession: ""
      });
    }
  };

  render() {
    return (
      <div className="main-form">
        <form className="my-form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Full Name:</label>
            <input
              id="name"
              type="text"
              name="fullName"
              onChange={e => this.setState({ fullName: e.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              type="text"
              name="age"
              onChange={e => this.setState({ age: e.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="school">School:</label>
            <input
              id="school"
              type="text"
              name="school"
              onChange={e => this.setState({ school: e.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="prof">Profession:</label>
            <input
              id="prof"
              type="text"
              name="profession"
              onChange={e => this.setState({ profession: e.target.value })}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
