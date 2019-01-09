import React, { Component } from "react";
import "../index.css";

class WeatherDisplay extends Component {
  render() {
    return (
      <div className="display-data">
        <h1 className="weather-data-temp">{this.props.temperature}</h1>
        <h1 className="weather-data-type">{this.props.weatherType}</h1>
      </div>
    );
  }
}

export default WeatherDisplay;
