const { PORT: port } = require('./config.js')
const { WebSocketServer } = require('ws')
const server = new WebSocketServer({ port })
const socks = []

server.on('connection', (socket) => {
  const name = ['p', Date.now()].join('')
  socket.name = name
  socks.push(socket)

  socket.on('message', (chunk) => {
    console.log(chunk.toString())
    socks.map((sock) => sock.send(chunk.toString()))
  })
})
