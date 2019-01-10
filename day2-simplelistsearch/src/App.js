import React, { Component } from "react";
import TitleCard from "./components/TitleCard";
import BandList from "./components/BandList";
class App extends Component {
  render() {
    return (
      <div className="main">
        <React.Fragment>
          <TitleCard />
          <BandList />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
