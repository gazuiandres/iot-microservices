const mqtt = require('mqtt')
const chalk = require('chalk')

const AgentModel = require('../../models/agent.model')
const MetricModel = require('../../models/metric.model')
const AgentsService = require('../../services/agents.service')
const MetricService = require('../../services/metrics.service')
const MqttManager = require('./mqttManager')

module.exports = () => {
  const sub = mqtt.connect('mqtt://localhost:9000')
  console.log(chalk.yellow('[MQTT_CLIENT]: Connected to MQTT broker'))

  const agentsService = AgentsService(AgentModel)
  const metricsService = MetricService(MetricModel)
  const mqttManager = new MqttManager(agentsService, metricsService)

  const actions = {
    'Agent/Message': async (data) => await mqttManager.addMetric(data),
    'Agent/Disconnected': async ({ agent }) => await mqttManager.updateAgent(agent),
    'Agent/Connected': async (data) => await mqttManager.updateAgent(data),
  }

  sub.on('connect', () => {
    sub.subscribe('Agent/Connected')
    sub.subscribe('Agent/Disconnected')
    sub.subscribe('Agent/Message')
  })

  sub.on('message', async (topic, message) => {
    if (actions[topic]) {
      const payload = message.toString()
      const action = actions[topic]
      await action(JSON.parse(payload))
    }
  })
}
