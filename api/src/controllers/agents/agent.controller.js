
function setupController(service) {
    async function getAll(req, res, next) {
        try {
            const response = await service.getAll()
            res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async function getOne(req, res, next) {
        try {
            const response = await service.getOne(req.params)
            res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async function createOrUpdate(req, res, next) {
        try {
            const response = await service.createOrUpdate(req.body)
            res.json(response)
        } catch (error) {
            next(error)
        }
    }

    return {
        getAll,
        getOne,
        createOrUpdate
    }
}

module.exports = setupController