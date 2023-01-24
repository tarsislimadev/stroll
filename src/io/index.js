const { PORT: port } = require('./config.js')

const { WebSocketServer } = require('ws')
const server = new WebSocketServer({ port })

server.on('connection', (socket) => {
  const send = (header, body = {}) => {
    socket.send(JSON.stringify({ header, body }))
  }

  socket.on('message', (data) => {
    console.log('message', data.toString())

    const packet = JSON.parse(data)

    switch (packet.type) {
      case 'hello from client':
        break
    }
  })
})
