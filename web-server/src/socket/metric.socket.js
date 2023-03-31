const chalk = require('chalk')
const metricSocket = (ioNameSpace) => {
  ioNameSpace.on('connection', (socket) => {
    console.log(chalk.blue(`[METRICS SOCKET]: Client ${socket.id} connected`))
    socket.on('watch-agent-metric', ({ agentUuid, metricType }) => {
      socket.join(`${agentUuid}-${metricType}`)
    })
  })
}

module.exports = metricSocket
