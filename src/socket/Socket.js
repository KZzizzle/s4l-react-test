import io from 'socket.io-client'

class Socket {
  constructor() {
    if (!Socket.instance) {
      this.socket = io();
      Socket.instance = this;
    }
    return Socket.instance;
  }
  getSocket() {
    return this.socket;
  }
}

const socket = new Socket();
Object.freeze(socket);

export default socket.getSocket();
