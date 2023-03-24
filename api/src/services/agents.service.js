const agentsService = () => {
    const getAll = async () => {
        return {
            data: []
        }
    }

    const getOne = async ({ id }) => {
        return {
            id
        }
    }

    const createOrUpdate = () => {

    }


    return {
        getAll,
        getOne,
        createOrUpdate
    }
}

module.exports = agentsService


