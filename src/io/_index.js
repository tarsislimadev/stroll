const logger = require('./libs/logger')
const { Socket } = require('socket.io-client');
const { Server } = require('socket.io')

const server = new Server

server.on('data', console.log)

server.on('connection', console.log)

server.on('close', console.log)

server.listen(80)

const socket = new Socket(':80')

socket.on('connect', console.log)

socket.on('drain', console.log)

socket.on('close', console.log)
