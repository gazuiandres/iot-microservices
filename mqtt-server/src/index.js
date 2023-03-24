const aedes = require('aedes')();
const chalk = require('chalk')
const server = require('node:net').createServer(aedes.handle)
const port = 9000

const log = console.log

aedes.on('client', function (client) {
    log(chalk.green(`[client-connected]: ${client.id}`))
})

server.listen(port, function () {
  log(chalk.yellow(`[MQTT ON]: PORT ${port}`))
})
