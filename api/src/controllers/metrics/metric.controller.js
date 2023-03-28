
function setupController(service) {
    async function getTypes(req, res) {
        const response = await service.getTypesByAgentId(req.params)
        res.json(response)
    }

    async function getMetric(req, res) {
        const response = await service.getMetricByAgentId(req.params)
        res.json(response)
    }

    async function create(req, res) {
        const response = await service.create(req.body)
        res.json(response)
    }

    return {
        getTypes,
        getMetric,
        create
    }
}

module.exports = setupController