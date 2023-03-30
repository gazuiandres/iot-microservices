const chalk = require('chalk')
const metricSocket = (ioNameSpace) => {
  ioNameSpace.on('connection', (socket) => {
    console.log(chalk.blue(`[METRICS SOCKET]: Client ${socket.id} connected`))
  })
}

module.exports = metricSocket
