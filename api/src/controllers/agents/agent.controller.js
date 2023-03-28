
function setupController(service) {
    async function getAll (req, res) {
        const response = await service.getAll()
        res.json(response)
    }

    async function getOne (req, res) {
        const response = await service.getOne(req.params)
        res.json(response)
    }

    async function createOrUpdate (req, res) {
        const response = await service.createOrUpdate(req.body)
        res.json(response)
    }

    return {
        getAll,
        getOne,
        createOrUpdate
    }
}

module.exports = setupController