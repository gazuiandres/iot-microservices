const agentModel = require('../../models/agent.model')
const agentsService = require('../../services/agents.service')
const agentsController = require('./agent.controller')

const service = agentsService(agentModel)

module.exports = agentsController(service)