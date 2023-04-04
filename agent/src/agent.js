class Agent {
  constructor({ name, uuid, interval, clientMqtt }) {
    this.agent = {
      name,
      uuid,
      connected: false
    }
    this.options = {
      interval
    }
    this.client = clientMqtt
    this.metrics = new Map()
    this.timer = null
    this.isStarted = false
  }

  addMetric({ type, method }) {
    this.metrics.set(type, method)
  }

  removeMetric(type) {
    this.metrics.delete(type)
  }

  connect() {
    if (!this.isStarted) {
      this.isStarted = true
      const agent = {
        ...this.agent,
        connected: true
      }
      this.client.publish('Agent/Connected', JSON.stringify(agent))

      this.timer = setInterval(async () => {
        let message = {
          agent: this.agent,
          metrics: []
        }

        for (const [metric, getValue] of this.metrics) {
          message.metrics.push({
            type: metric,
            value: await getValue(),
            createdAt: new Date()
          })
        }

        this.client.publish('Agent/Message', JSON.stringify(message))

      }, this.options.interval);
    }
  }

  disconnect() {
    if (this.isStarted) {
      clearInterval(this.timer)
      this.isStarted = false
      this.client.end()
    }
  }
}

module.exports = Agent
