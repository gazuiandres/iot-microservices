const express = require('express')
const router = express.Router()

const agentsController = require('../controllers/agents')
const validatorHandler = require('../middlewares/validation.handler')
const { getAgentSchema, creatOrUpdateAgentSchema } = require('../schemas/agent.schema')


router.get('/', agentsController.getAll)
router.get('/:uuid', validatorHandler(getAgentSchema, 'params'), agentsController.getOne)
router.post('/', validatorHandler(creatOrUpdateAgentSchema, 'body'), agentsController.createOrUpdate)


module.exports = router
