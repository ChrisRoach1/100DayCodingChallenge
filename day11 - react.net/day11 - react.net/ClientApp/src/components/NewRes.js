import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
export class NewRes extends Component {
  static displayName = NewRes.name;

  state = {
    availableRooms: [],
    selectedRoom: [],
    reservation: {
      RoomId: "",
      ResDt: new Date(),
      NumberGuests: ""
    }
  };

  //runs when the screen loads, we pull in our rooms
  componentDidMount = async () => {
    let roomList = null;
    let options = [];
    let response = null;
    roomList = await fetch("api/Rooms/Index");
    response = await roomList.json();
    response.map(room => {
      let temp = { label: room.roomName, value: room.roomId };
      options.push(temp);
    });
    this.setState({ availableRooms: options });
    console.log(this.state.availableRooms);
  };

  //set state for number of guests
  handleGuestIn = e => {
    let reservation = { ...this.state.reservation };
    reservation.NumberGuests = e.target.value;
    this.setState({ reservation });
  };

  //set state for date
  handleDatePick = date => {
    let reservation = { ...this.state.reservation };
    reservation.ResDt = date;
    this.setState({ reservation });
  };

  //set state for room selected
  handleSelect = selected => {
    let reservation = { ...this.state.reservation };
    let selectedRoom = { ...this.state.selectedRoom };
    selectedRoom = selected;
    reservation.RoomId = selected.value;
    this.setState({ reservation, selectedRoom });
  };

  //post our data to the controller to be added
  handleSubmit = async e => {
    let data = JSON.stringify({
      RoomId: parseInt(this.state.reservation.RoomId),
      ResDt: this.state.reservation.ResDt,
      NumberGuests: parseInt(this.state.reservation.NumberGuests)
    });
    await fetch("api/Reservations/Create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    });
  };

  render() {
    const options = this.state.availableRooms;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Number of guests: </label>
          <input type="number" onChange={this.handleGuestIn} />
          <DatePicker
            selected={this.state.reservation.ResDt}
            onChange={this.handleDatePick}
          />
          <Select
            value={this.state.selectedRoom}
            onChange={this.handleSelect}
            options={options}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
