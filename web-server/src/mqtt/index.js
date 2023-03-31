const mqtt = require('mqtt')
const chalk = require('chalk')

const MqttManager = require('./mqttManager')

module.exports = ({agentSocket, metricSocket}) => {
  const sub = mqtt.connect('mqtt://localhost:9000')

  const mqttManager = new MqttManager(agentSocket, metricSocket)

  const actions = {
    'Agent/Message': async (data) => await mqttManager.addMetric(data),
    'Agent/Disconnected': async ({ agent }) => await mqttManager.updateAgent(agent),
    'Agent/Connected': async (data) => await mqttManager.updateAgent(data),
  }

  sub.on('connect', () => {
    sub.subscribe('Agent/Connected')
    sub.subscribe('Agent/Disconnected')
    sub.subscribe('Agent/Message')
    console.log(chalk.yellow('[MQTT_CLIENT]: Connected to MQTT broker'))
  })

  sub.on('message', async (topic, message) => {
    if (actions[topic]) {
      const payload = message.toString()
      const action = actions[topic]
      await action(JSON.parse(payload))
    }
  })
}
