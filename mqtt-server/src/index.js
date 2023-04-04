const aedes = require('aedes')();
const chalk = require('chalk')
const server = require('node:net').createServer(aedes.handle)

const { PORT } = require('./config')

const log = console.log

const clients = new Map()

aedes.on('client', function (client) {
  log(chalk.green(`[client-connected]: ${client.id}`))
})

aedes.on('clientDisconnect', function (client) {
  log(chalk.blue(`[client-disconnected]: ${client.id}`))
  const agent = clients.get(client.id)

  if (agent) {
    aedes.publish({
      topic: 'Agent/Disconnected',
      payload: JSON.stringify({
        agent: {
          uuid: agent.uuid,
          connected: false,
          name: agent.name
        }
      })
    })
  }

  clients.delete(client.id)
})

aedes.on('publish', function (packet, client) {
  if (client) {
    const payload = packet.payload

    if (packet.topic === 'Agent/Connected') {
      if (!clients.get(client.id)) {
        clients.set(client.id, JSON.parse(payload))
      }
    }

  }
})

server.listen(PORT, function () {
  log(chalk.yellow(`[MQTT ON]: PORT ${PORT}`))
})
