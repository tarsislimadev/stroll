const log = (log, ...args) => log(process.stdout.write([...args, '\r\n'].join('')))

module.exports = {
  log:   (...args) => log(console.log, ...args),
  info:  (...args) => log(console.info, ...args),
  error: (...args) => log(console.error, ...args),
}
