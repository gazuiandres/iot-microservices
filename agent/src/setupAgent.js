const mqtt = require('mqtt')
const chalk = require('chalk')
const Agent = require('./agent')
const randomValue = require('./utils/randomValue')

module.exports = ({ name, uuid, interval }) => {
  const pub = mqtt.connect('mqtt://localhost:9000')
  console.log(chalk.green('[MQTT-CLIENT]: Connected to MQTT broker'))
  const agentService = new Agent({
    name,
    uuid,
    interval,
    clientMqtt: pub
  })

  agentService.addMetric({
    type: 'rv',
    method: randomValue
  })

  pub.on('connect', () => {
    agentService.connect()
    console.log(chalk.yellow('[AGENT]: Connected'))
  })
}
