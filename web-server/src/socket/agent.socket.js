const chalk = require('chalk')
const agentSocket = (ioNameSpace) => {
  ioNameSpace.on('connection', (socket) => {
    console.log(chalk.blue(`[AGENTS SOCKET]: Client ${socket.id} connected`))
  })
}

module.exports = agentSocket
