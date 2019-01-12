import React, { Component } from "react";
import "../index.css";

class UserLogin extends Component {
  state = {
    username: "",
    password: ""
  };

  //we take the login info and pass back up to App.js
  login = e => {
    e.preventDefault();
    var loginInfo = this.state;
    this.props.submitLogin(loginInfo);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="login-page">
        <div className="form-container">
          <form onSubmit={this.login}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                className="form-field"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-field"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default UserLogin;
