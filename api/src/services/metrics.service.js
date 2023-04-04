const metricsService = (MetricModel) => {
  const getTypesByAgentId = async ({ uuid }) => {
    const metrics = await MetricModel.aggregate([
      {
        $match: {
          agent: uuid
        }
      },
    ])
      .group({
        _id: "$type"
      })
    return metrics;
  }

  const getMetricByAgentId = async ({ uuid, type }) => {
    const metric = await MetricModel.find({ agent: uuid, type })
      .select(["type", "value", "createdAt", "agent"]).limit(11)
      .sort({ createdAt: 'desc' })
    return metric
  }

  const create = async (data) => {
    const newMetric = await MetricModel.create(data)
    return newMetric
  }


  return {
    getTypesByAgentId,
    getMetricByAgentId,
    create
  }
}

module.exports = metricsService


