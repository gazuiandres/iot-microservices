const chalk = require('chalk')
const agentSocket = (ioNameSpace) => {
  ioNameSpace.on('connection', (socket) => {
    console.log(chalk.blue(`[AGENTS SOCKET]: Client ${socket.id} connected`))

    socket.on('watch-agent', (agentUuid) => {
      console.log('agente:', agentUuid)
      socket.join(agentUuid)
    })

  })
}

module.exports = agentSocket
