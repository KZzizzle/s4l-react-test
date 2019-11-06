const express = require('express');
const proxy = require('http-proxy-middleware');

const options = {
  target: 'http://172.16.9.154:8080',
  changeOrigin: true,
  ws: true
};

const app = express();

const s4lProxy = proxy('/ws/s4l', options);

app.use(s4lProxy);

const server = app.listen(3002);

server.on('upgrade', s4lProxy.upgrade);