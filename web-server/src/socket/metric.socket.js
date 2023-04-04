const metricSocket = (ioNameSpace) => {
  ioNameSpace.on('connection', (socket) => {
    socket.on('watch-agent-metric', ({ agentUuid, metricType }) => {
      socket.join(`${agentUuid}-${metricType}`)
    })
  })
}

module.exports = metricSocket
