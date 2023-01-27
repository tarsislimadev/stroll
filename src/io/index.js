const { PORT: port } = require('./config.js')
const { WebSocketServer } = require('ws')
const server = new WebSocketServer({ port })

server.on('connection', (socket) => {
  socket.on('message', (data) => console.log('message', data.toString()))
})
