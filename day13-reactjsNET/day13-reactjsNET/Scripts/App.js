class Hello extends React.Component {
  state = {
    rooms: []
  };

  render() {
    return (
      <div>
        {this.props.roomList.map(room => {
          return (
            <div key={room.roomId}>
              <h3>{room.roomName}</h3>
              <p>{room.roomDesc}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
