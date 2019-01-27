import React, { Component } from "react";

export class Rooms extends Component {
  static displayName = Rooms.name;

  state = {
    rooms: [],
    editing: false,
    roomToEdit: {}
  };

  //runs when the component is loaded in
  componentDidMount = async () => {
    this.getRooms();
  };

  getRooms = async () => {
    let roomList = null;
    let response = null;
    this.setState({ rooms: [] });
    roomList = await fetch("api/Rooms/Index");
    response = await roomList.json();
    this.setState({ rooms: response });
    console.log(this.state.rooms);
  };

  //delete the room, sends the room id to controller
  handleDelete = room => {
    let con = window.confirm("Are you sure you want to delete?");
    let id = room.roomId;
    if (!con) {
      return;
    } else {
      fetch("api/Rooms/Delete/" + id, {
        method: "delete"
      }).then(data => {
        this.setState({
          rooms: this.state.rooms.filter(room => {
            return room.roomId !== id;
          })
        });
      });
    }
  };

  handleEdit = room => {
    this.setState({
      roomToEdit: room,
      editing: true
    });
  };

  handleNameChange = e => {
    let roomtoedit = { ...this.state.roomToEdit };
    roomtoedit.roomName = e.target.value;
    this.setState({ roomToEdit: roomtoedit });
  };

  handleNumberChange = e => {
    let roomtoedit = { ...this.state.roomToEdit };
    roomtoedit.roomNum = e.target.value;
    this.setState({ roomToEdit: roomtoedit });
  };

  handleDescriptionChange = e => {
    let roomtoedit = { ...this.state.roomToEdit };
    roomtoedit.roomDesc = e.target.value;
    this.setState({ roomToEdit: roomtoedit });
  };

  handleCapacityChange = e => {
    let roomtoedit = { ...this.state.roomToEdit };
    roomtoedit.capacity = e.target.value;
    this.setState({ roomToEdit: roomtoedit });
  };

  loadRoomList = () => {
    var rooms = this.state.rooms;
    return (
      <div>
        {rooms.map(room => {
          return (
            <div key={room.roomId}>
              <h3>{room.roomName}</h3>
              <p>{room.roomDesc}</p>
              <button onClick={this.handleDelete.bind(this, room)}>
                Delete?
              </button>
              <button onClick={this.handleEdit.bind(this, room)}>Edit?</button>
            </div>
          );
        })}
      </div>
    );
  };

  handleUpdate = e => {
    e.preventDefault();
    let data = JSON.stringify(this.state.roomToEdit);
    fetch("api/Rooms/Edit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    });
    this.setState({
      roomToEdit: {},
      editing: false
    });
    this.getRooms();
  };

  LoadRoomEdit = () => {
    return (
      <div>
        <form onSubmit={this.handleUpdate}>
          <label>Name:</label>
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.roomToEdit.roomName}
          />
          <label>Number:</label>
          <input
            type="text"
            onChange={this.handleNumberChange}
            value={this.state.roomToEdit.roomNum}
          />
          <label>Description:</label>
          <input
            type="text"
            onChange={this.handleDescriptionChange}
            value={this.state.roomToEdit.roomDesc}
          />
          <label>Capacity:</label>
          <input
            type="text"
            onChange={this.handleCapacityChange}
            value={this.state.roomToEdit.capacity}
          />
          <input type="submit" value="update" />
        </form>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.editing ? this.LoadRoomEdit() : this.loadRoomList()}
      </div>
    );
  }
}
