const express = require('express')
const router = express.Router()

const metricsController = require('../controllers/metrics')

router.get('/:id', metricsController.getTypes)
router.get('/:type/:id', metricsController.getMetric)
router.post('/', metricsController.create)


module.exports = router
