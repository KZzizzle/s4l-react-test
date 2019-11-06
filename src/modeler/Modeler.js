import React from 'react';
import { socket } from '../api/socket/s4l';

class Modeler extends React.Component {
  constructor(props) {
    super(props);
    socket.on("s4lConnected", () => {
      console.log("S4L connected");
    }, this);
    socket.on("img-wsIO", msg => {
      console.log("img-wsIO", msg);
    }, this);
  }
  render() {
    return <img src={this.props.src} alt="Remote render" />;
  }
}

export default Modeler;