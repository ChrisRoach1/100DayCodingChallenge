import React, { Component } from "react";
import "./index.css";
import UserLogin from "./components/UserLogin";
import BankAccount from "./components/BankAccount";

class App extends Component {
  state = {
    currentUser: "",
    password: "",
    showAccount: false,
    accountBalance: ""
  };

  //we assign our current user and password in our state and also generate a account balance to show on the screen
  handleLogin = loginInfo => {
    var balance = Math.floor(Math.random() * 1000 + 1);
    this.setState({
      currentUser: loginInfo.username,
      password: loginInfo.password,
      showAccount: true,
      accountBalance: balance
    });
  };

  handleLogout = () => {
    this.setState({
      showAccount: false
    });
  };

  // if "showAccount" is true we show the bank account, if not we show the login page.
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>React ATM</h1>
        </div>
        {this.state.showAccount ? (
          <BankAccount
            accountBalance={this.state.accountBalance}
            currentUser={this.state.currentUser}
            logout={this.handleLogout}
          />
        ) : (
          <UserLogin submitLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
