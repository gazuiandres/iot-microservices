const agentsService = (AgentModel) => {
    const getAll = async () => {
        const agents = await AgentModel.find()
        return agents;
    }

    const getOne = async ({ uuid }) => {
        const agent = await AgentModel.findOne({ uuid })
        return agent
    }

    const createOrUpdate = async (data) => {
        const agent = await AgentModel.findOneAndUpdate({ uuid: data.uuid }, data, {
            new: true,
        })

        if (agent) {
            return agent
        }

        const newAgent = await AgentModel.create(data)
        return newAgent
    }


    return {
        getAll,
        getOne,
        createOrUpdate
    }
}

module.exports = agentsService


