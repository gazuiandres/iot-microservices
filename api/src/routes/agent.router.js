const express = require('express')
const router = express.Router()

const agentsController = require('../controllers/agents')

router.get('/', agentsController.getAll)
router.get('/:id', agentsController.getOne)
router.post('/', agentsController.createOrUpdate)


module.exports = router
