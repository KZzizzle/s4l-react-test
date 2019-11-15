import React from 'react';

import socket from '../socket/Socket';


import RemoteRender from './RemoteRender';
import RemotePositioned from './RemotePositioned';

class RemoteView extends React.Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.mouseDrag = false;
    this.blockMouseEvent = false;
    this.state = {
      src: ''
    };
  }

  render() {
    return (
      <div className="remote-render" ref={this.container} draggable="false"
        onMouseDown={this.mouseHandler}
        onMouseUp={this.mouseHandler}
        onMouseMove={this.mouseHandler}
        onWheel={this.mouseHandler}
        onMouseEnter={this.mouseHandler}
        onMouseLeave={this.mouseHandler}>
        <RemoteRender src={this.state.src}/>
        <RemotePositioned />
      </div>
    );
  }

  mouseHandler = evt => {
    let sendEvent = true;
    const data = {};
    const convertPosition = (x, y) => ({
      x,
      y: this.container.current.offsetHeight - y
    });
    switch (evt.type) {
      case 'mouseenter':
        break;
      case 'mouseleave':
        this.mouseDrag = false;
        break;
      case 'mousedown':
        this.mouseDrag = true;
        data.what = 1;
        data.pevBtn = evt.button;
        data.type = "OnMouseButton";
        break;
      case 'mouseup':
        this.mouseDrag = false;
        data.what = 2;
        data.pevBtn = evt.button;
        data.type = "OnMouseButton";
        break;
      case 'mousemove':
        sendEvent = this.mouseDrag && !this.blockMouseEvent;
        data.type = "OnMouseMove";
        break;
      case 'wheel':
        data.type = "OnMouseWheel";
        data.pevWD = null; // TODO
        break;
      default:
        console.log("Event not handled: ", evt.type);
    }
    if (sendEvent && data.type) {
      const pos = convertPosition(evt.pageX, evt.pageY);
      data.posX = pos.x;
      data.posY = pos.y;
      socket.emit('userEvent', data);
      if (evt.type === 'mousemove') {
        this.blockMouseEvent = true;
        setTimeout(() => this.blockMouseEvent = false, 40); // max 25 movement events per second
      }
    }
  }

  updateSrc(base64) {
    this.setState({
      src: 'data:image/jpeg;base64,' + base64
    });
  }

  componentDidMount() {
    this.listenSocket();
    let timeout = null;
    window.addEventListener('resize', () => {
      clearTimeout(timeout);
      // Limit sending the resize events to one each 500ms
      timeout = setTimeout(() => {
        const {
          offsetHeight,
          offsetWidth
        } = this.container.current;
        socket.emit('userEvent', {
          width: offsetWidth,
          height: offsetHeight,
          type: "OnResize"
        });
      }, 500);
    });
  }

  listenSocket() {
    socket.on("connect", () => {
      console.log("S4L connected");
      const {
        offsetHeight,
        offsetWidth
      } = this.container.current;
      socket.emit("userEvent", {
        width: offsetWidth,
        height: offsetHeight,
        type: "OnResize"
      });
    }, this);
    socket.on("img-wsIO", msg => {
      if (msg.image) {
        this.updateSrc(this.arrayBufferToBase64(msg.buffer));
      }
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

export default RemoteView;