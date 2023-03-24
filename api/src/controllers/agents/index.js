const agentsService = require('../../services/agents.service')
const agentsController = require('./agent.controller')

const service = agentsService()

module.exports = agentsController(service)