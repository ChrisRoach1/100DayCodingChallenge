import React, { Component } from "react";

export class Rooms extends Component {
  static displayName = Rooms.name;

  state = {
    rooms: []
  };

  componentDidMount = async () => {
    let roomList = null;
    let response = null;

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
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return <div>{this.loadRoomList()}</div>;
  }
}
