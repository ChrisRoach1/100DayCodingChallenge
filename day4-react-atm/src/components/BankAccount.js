import React, { Component } from "react";
import "../index.css";

class BankAccount extends Component {
  state = {
    currentUser: "",
    accountBalance: "",
    deposit: "",
    withdraw: ""
  };

  //when the component is loaded in we set our state variables that is passed down from App.js
  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser,
      accountBalance: this.props.accountBalance
    });
  }

  //we make sure the user isnt depositing 0 and then add the total onto our balance and then set
  //account balance to our new balance, if the user leaves the field blank and trys to enter they will get an alert
  handleDeposit = e => {
    e.preventDefault();
    if (this.state.deposit.trim() !== "") {
      var currentBalance = parseInt(this.state.accountBalance);
      var newBalance = currentBalance + parseInt(this.state.deposit);
      this.setState({
        accountBalance: newBalance.toString(),
        deposit: ""
      });
    } else {
      alert("You need to enter an amount to deposit!");
    }
  };

  //we make sure the user isnt overdrawing, if they arent we do the math and assign the new value to account balance
  handleWithdraw = e => {
    e.preventDefault();
    var withdrawAmount = parseInt(this.state.withdraw);
    var currentBalance = parseInt(this.state.accountBalance);

    if (withdrawAmount > currentBalance) {
      alert("You do not have that much money!");
    } else {
      var newBalance = currentBalance - withdrawAmount;
      this.setState({
        accountBalance: newBalance.toString(),
        withdraw: ""
      });
    }
  };

  render() {
    return (
      <div className="bankaccount-page">
        <h2>Hello {this.state.currentUser}!</h2>
        <h3>Account Balance: ${this.state.accountBalance}</h3>
        <div>
          <form className="deposit-form" onSubmit={this.handleDeposit}>
            <label>Deposit:</label>
            <input
              type="text"
              name="deposit-form"
              value={this.state.deposit}
              onChange={e => this.setState({ deposit: e.target.value })}
            />
            <button className="depositBtn">Deposit</button>
          </form>
        </div>

        <div>
          <form className="withdraw-form" onSubmit={this.handleWithdraw}>
            <label>Withdraw:</label>
            <input
              type="text"
              name="withdraw-form"
              value={this.state.withdraw}
              onChange={e => this.setState({ withdraw: e.target.value })}
            />
            <button className="withdrawBtn">Withdraw</button>
          </form>
        </div>
        <button onClick={this.props.logout} className="logoutBtn">
          Log out
        </button>
      </div>
    );
  }
}

export default BankAccount;
