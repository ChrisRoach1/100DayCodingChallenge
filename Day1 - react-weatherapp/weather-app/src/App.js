import React, { Component } from "react";
import Form from "./Components/Form";
import WeatherDisplay from "./Components/WeatherDisplay";

class App extends Component {
  state = {
    zipcode: "",
    temp: "",
    weatherType: ""
  };

  getZipCode = zipcode => {
    this.setState({
      zipcode: zipcode,
      temp: "",
      weatherType: ""
    });
  };

  getWeather = async e => {
    e.preventDefault();
    let api_call = null;
    let response = null;
    let zipcode = this.state.zipcode;
    if (this.state.zipcode === "") {
    } else {
      api_call = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?zip=" +
          zipcode +
          ",us&appid=4caa8ae32c16c2f6d7e9180930d5916e"
      );
      response = await api_call.json();
    }

    var kTemp = parseInt(response.main.temp);
    var fTemp = (9 / 5) * (kTemp - 273) + 32;
    let tempString = fTemp.toString();

    this.setState({
      temp: tempString,
      weatherType: response.weather[0].main
    });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div id="main">
          <h1>React Weather App!</h1>
        </div>
        <div id="mainContent">
          <Form callWeather={this.getWeather} getZip={this.getZipCode} />
          <WeatherDisplay
            temperature={this.state.temp}
            weatherType={this.state.weatherType}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
