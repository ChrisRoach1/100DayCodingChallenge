import React, { Component } from "react";
import "../index.css";

class Form extends Component {
  state = {
    zipcode: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleButton = () => {
    if (this.state.zipcode === "") {
      alert("please enter a zipcode!");
    } else {
      this.props.getZip(this.state.zipcode);
    }
  };

  render() {
    return (
      <form onSubmit={this.props.callWeather}>
        <div className="field">
          <label>zipcode:</label>
          <input
            value={this.state.zipcode}
            onChange={this.handleChange}
            type="text"
            name="zipcode"
            placeholder="zipcode..."
          />
        </div>

        <button onClick={this.handleButton}>Get Weather!</button>
      </form>
    );
  }
}

export default Form;
