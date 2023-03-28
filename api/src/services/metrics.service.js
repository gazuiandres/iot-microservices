const metricsService = (MetricModel) => {
    const getTypesByAgentId = async ({ id }) => {
        const metrics = await MetricModel.aggregate([
            {
                $match: {
                    agent: id
                }
            },
        ])
        .group({
            _id: "$type"
        })
        return metrics;
    }

    const getMetricByAgentId = async ({ id, type }) => {
        const metric = await MetricModel.find({ agent: id, type }).select(["type", "value", "createdAt"])
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


