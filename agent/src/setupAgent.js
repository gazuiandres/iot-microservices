const mqtt = require('mqtt')
const chalk = require('chalk')
const Agent = require('./agent')
const memoryUsed = require('./utils/memoryUsed')
const batteryVoltage = require('./utils/batteryVoltage')

const { mqttHost } = require('./config')

module.exports = ({ name, uuid, interval }) => {
  const pub = mqtt.connect(mqttHost)
  console.log(chalk.green('[MQTT-CLIENT]: Connected to MQTT broker'))
  const agentService = new Agent({
    name,
    uuid,
    interval,
    clientMqtt: pub
  })

  agentService.addMetric({
    type: 'ramUsed',
    method: memoryUsed
  })
  agentService.addMetric({
    type: 'batteryVoltage',
    method: batteryVoltage
  })

  pub.on('connect', () => {
    agentService.connect()
    console.log(chalk.yellow('[AGENT]: Connected'))
  })
}
