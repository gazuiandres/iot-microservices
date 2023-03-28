
function setupController(service) {
    async function getTypes(req, res, next) {
        try {
            const response = await service.getTypesByAgentId(req.params)
            res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async function getMetric(req, res, next) {
        try {
            const response = await service.getMetricByAgentId(req.params)
            res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async function create(req, res, next) {
        try {
            const response = await service.create(req.body)
            res.json(response)
        } catch (error) {
            next(error)
        }
    }

    return {
        getTypes,
        getMetric,
        create
    }
}

module.exports = setupController