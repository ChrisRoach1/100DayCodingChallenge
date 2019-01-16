import React, { Component } from "react";
import "./index.css";
import SocialCard from "./components/SocialCard";

class App extends Component {
  render() {
    return (
      <div className="card-main">
        <SocialCard />
      </div>
    );
  }
}

export default App;
