import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Stream extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:3030',
      color: 'white'
    };
    this._socket = socketIOClient(this.state.endpoint);
    this._socket.on('change color', col => {
      // eslint-disable-next-line
      document.body.style.backgroundColor = col;
    });
  }
  // adding the function
  setColor(color) {
    this.setState({ color });
  }

  // sending sockets
  send() {
    this._socket.emit('change color', this.state.color);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => this.send()}>Change Color</button>
        <button id="blue" onClick={() => this.setColor('blue')}>
          Blue
        </button>
        <button id="red" onClick={() => this.setColor('red')}>
          Red
        </button>
      </div>
    );
  }
}
export default Stream;
