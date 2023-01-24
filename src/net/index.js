const netPkg = require('net')
const logger = require('./libs/logger')

const server = netPkg.createServer(listener => {
  listener.on('data', (chunk) => {
    logger.info(chunk.toString())
    listener.end('Listener')
  })
})

server.listen(80, () => logger.info('listening on 80'))
