import React, { Component } from "react";

class BandList extends Component {
  state = {
    bandsInit: [
      "21 Pilots",
      "Mumford and Sons",
      "Tiny Meat Gang",
      "Jon Bellion",
      "Panic at the Disco",
      "Fall Out Boy",
      "Joji",
      "Tool",
      "Ed Sheeran",
      "blink-182",
      "Post Malone",
      "Tyler Childers",
      "Bastille",
      "The 1975",
      "Gorillaz"
    ],

    filtered: []
  };

  componentDidMount() {
    this.setState({
      filtered: this.state.bandsInit
    });
  }

  displayBands = () => {
    let bands = this.state.filtered;
    return (
      <ul className="band-list">
        {bands.map(band => {
          return <li>{band}</li>;
        })}
      </ul>
    );
  };

  //here we do NOT want to set a state value to our input field because it wont
  //reflect correctly. For example if we enter in text then remove it all,
  //our state will still show the last letter but e.target.value will be empty
  handleOnChange = event => {
    var beFiltered = this.state.bandsInit;
    console.log(event.target.value.toLowerCase());
    beFiltered = beFiltered.filter(band => {
      return band.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      filtered: beFiltered
    });
  };

  render() {
    return (
      <div>
        <div className="field-container">
          <input
            className="text-field"
            type="text"
            name="searchContext"
            placeholder="Search..."
            onChange={this.handleOnChange}
          />
        </div>
        <div className="list-container">{this.displayBands()}</div>
      </div>
    );
  }
}

export default BandList;
