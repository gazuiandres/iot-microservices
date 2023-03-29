const server = require('./app')
const chalk = require('chalk')
const db = require('./libs/mongoose')
const setupMqtt = require('./libs/mqtt')

const { port } = require('./config')

db().then(() => console.log(chalk.blue('[MONGO_DB]: connected successfully')))
setupMqtt()

server.listen(port, () => {
    console.log(chalk.green(`[api-server]: API ON PORT ${port}`))
})

