class MqttManager {
  constructor(agentsService, metricsService) {
    this.agentsService = agentsService
    this.metricsService = metricsService
  }

  async updateAgent(data) {
    await this.agentsService.createOrUpdate(data)
  }

  async addMetric({ agent, metrics }) {
    for (const metric of metrics) {
      const { type, value } = metric;
      const data = {
        type,
        value,
        agent: agent.uuid
      }
      await this.metricsService.create(data);
    }
  }
}

module.exports = MqttManager
