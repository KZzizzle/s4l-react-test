import React from 'react';

import io from "socket.io-client";

class RemoteRender extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      src: ''
    };
  }
  render() {
    return (
      <div className="remote-render" ref={this.container}>
        <img src={this.state.src} alt="Remote render" />
      </div>
    );
  }
  updateSrc(base64) {
    this.setState({
      src: 'data:image/jpeg;base64, ' + base64
    });
  }
  componentDidMount() {
    this.socket = io();
    this.listenSocket();
    let timeout = null;
    window.addEventListener('resize', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const {
          offsetHeight,
          offsetWidth
        } = this.container.current;
        this.socket.emit('userEvent', {
          width: offsetWidth,
          height: offsetHeight,
          type: "OnResize"
        });
      }, 500);
    });
  }
  listenSocket() {
    const {
      offsetHeight,
      offsetWidth
    } = this.container.current;
    this.socket.on("connect", () => {
      console.log("S4L connected");
      this.socket.emit("userEvent", {
        width: offsetWidth,
        height: offsetHeight,
        type: "OnResize"
      }, data => console.log(data));
    }, this);
    this.socket.on("img-wsIO", msg => {
      if (msg.image) {
        this.updateSrc(this.arrayBufferToBase64(msg.buffer));
      }
      this.resizing = false;
    }, this);
  }
  arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i=0; i<len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);    
  }
}

export default RemoteRender;