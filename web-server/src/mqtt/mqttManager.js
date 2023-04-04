class MqttManager {
  constructor(agentsSocket, metricsSocket) {
    this.agentsSocket = agentsSocket
    this.metricsSocket = metricsSocket
  }

  async updateAgent(data) {
    this.agentsSocket.emit("agents_updated", data)
  }

  async addMetric({ agent, metrics }) {
    for (const metric of metrics) {
      const { type, value } = metric;
      const data = {
        type,
        value,
        agent: agent.uuid
      }
      this.metricsSocket.in(`${agent.uuid}-${type}`).emit("add_metric", data);
    }
  }
}

module.exports = MqttManager
